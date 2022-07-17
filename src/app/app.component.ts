import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FieldBase } from './modules/dynamic-forms/field-base';
import { SampleFormProviderService } from './service/sample-form-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fields$: Observable<FieldBase<any>[]>;

  constructor(service: SampleFormProviderService) {
    this.fields$ = service.getFields();
  }
  
  onSubmit(data: any) {
    console.log(data);
  }
}
