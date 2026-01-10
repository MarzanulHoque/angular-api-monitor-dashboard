import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiItem } from '../../models/apiItems';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './api-form.html',
  styleUrl: './api-form.scss',
})
export class ApiForm {

  @Input() api: ApiItem | null = null;
  @Output() save = new EventEmitter<ApiItem>();
  @Output() cancel = new EventEmitter<void>();

  apiForm!: FormGroup;

  constructor(private fb: FormBuilder)
  {

  };

  onOnInit(): void{
    this.apiForm = this.fb.group(
      {
        name:[this.api?.name || ' ',Validators.required],
        url:[this.api?.url || '',[Validators.required,Validators.pattern('http?://.+')]],
        token:[this.api?.token || '']
      }
    );
  }
  onSave()
  {
    if(this.apiForm.valid)
    {
      const value = this.apiForm.value;
      const apiItem : ApiItem = {
          id:this.api?.id || 0,
          name:value.name,
          url:value.url,
          token:value.token
      };
      this.save.emit(apiItem);
    }
  }

  onCancel()
  {
    this.cancel.emit();
  }

}
