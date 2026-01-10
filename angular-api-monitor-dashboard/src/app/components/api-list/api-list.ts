import { OnInit,Component } from '@angular/core';
import { ApiItem } from '../../models/apiItems';
import { ApiMonitorService } from '../../services/api-monitor.service';

@Component({
  selector: 'app-api-list',
  imports: [],
  templateUrl: './api-list.html',
  styleUrl: './api-list.scss',
})
export class ApiList implements OnInit{
  
  apis: ApiItem[]=[];
  showForm = false;
  selectedApi:ApiItem | null = null;
  
  constructor(private apiService: ApiMonitorService)
  {}

  ngOnInit(): void {
    this.apiService.getApis().subscribe(list => 
      {
        this.apis=list;
      }
    )
  }

  addnew()
  {
    this.selectedApi = null;
    this.showForm = true;
  }

  editApi(api: ApiItem) {
    this.selectedApi = api;
    this.showForm = true;
  }

  deleteApi(id: number) {
    this.apiService.removeApi(id);
  }


  onSave(api: ApiItem)
  {
    if(api.id == 0)
    {
      this.apiService.addApi(api);

    }
    else{
      this.apiService.updateApi(api);
    }
    this.closeForm();
  }

  closeForm()
  {
    this.showForm = false;
    this.selectedApi = null;
  }

}
