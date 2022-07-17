import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FieldBase } from '../field-base';

@Injectable({
  providedIn: 'root',
})
export class FieldControlService {
  constructor(private formBuilder: FormBuilder) {}

  toFormGroup(fieldList: FieldBase<any>[]) {
    const group: any = {};

    fieldList.forEach((field) => {
      group[field.key] = [field.value];
      if (field.controlOptions) {
        group[field.key].push(field.controlOptions);
      }
    });

    return this.formBuilder.group(group);
  }
}
