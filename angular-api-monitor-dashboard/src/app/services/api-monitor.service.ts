import { DestroyRef ,inject,Injectable } from '@angular/core';
import { ApiItem } from '../models/apiItems';
import { BehaviorSubject, interval } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiMonitorService {
  private readonly STORAGE_KEY = 'api_monitor_list';
  private readonly EXPIRY_DAYS = 3;

  private apiList: ApiItem[] = [];
  private apiList$ = new BehaviorSubject<ApiItem[]>([]);

  private destroyref = inject(DestroyRef);

  constructor(private http: HttpClient)
  {
    this.loadFromStorage();

      interval(10000)
          .pipe(takeUntilDestroyed(this.destroyref))
          .subscribe(() => this.pollApis());
  }

  private loadFromStorage() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      const list: ApiItem[] = JSON.parse(raw);
      const now = Date.now();
      this.apiList = list.filter(item => (now - (item.addedAt || now)) < this.EXPIRY_DAYS * 24 * 60 * 60 * 1000);
      this.apiList$.next([...this.apiList]);
      this.saveToStorage(); 
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.apiList));
  }

  getApis() {
    return this.apiList$.asObservable();
  }

  addApi(api: ApiItem) {
    api.id = Date.now();
    api.addedAt = Date.now();
    this.apiList.push(api);
    this.apiList$.next([...this.apiList]);
    this.saveToStorage();
  }

  updateApi(api: ApiItem) {
    const index = this.apiList.findIndex(a => a.id === api.id);
    if (index > -1) {
      this.apiList[index] = { ...api, addedAt: this.apiList[index].addedAt };
      this.apiList$.next([...this.apiList]);
      this.saveToStorage();
    }
  }
  removeApi(id: number) {
    this.apiList = this.apiList.filter(a => a.id !== id);
    this.apiList$.next([...this.apiList]);
    this.saveToStorage();
  }

  private pollApis() {
    this.apiList.forEach(api => {
      
      const start = performance.now();
      let headers = new HttpHeaders();
      
      if(api.token)
      {
        headers = headers.set('X-API-TOKEN',api.token);
      }

      this.http.get(api.url,{headers}).subscribe(
        {
          next:() =>{
            api.status = 'success';
            api.responseTime = Math.round(performance.now()-start);
            this.apiList$.next([...this.apiList]);
            this.saveToStorage();
          },
          error:() =>{
            api.status='failure',
            api.responseTime = Math.round(performance.now()-start);
            this.apiList$.next([...this.apiList]);
            this.saveToStorage();
          }
        }
      )
    
    });
  }


}
