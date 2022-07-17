import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { FieldBase } from '../modules/dynamic-forms/field-base';
import { TextBoxField } from '../modules/dynamic-forms/fields/textbox';
import { FieldProvider } from '../modules/dynamic-forms/service/field-provider.interface';

@Injectable({
  providedIn: 'root',
})
export class SampleFormProviderService implements FieldProvider {
  getFields(): Observable<FieldBase<any>[]> {
    const fields: FieldBase<any>[] = [
      new TextBoxField({
        key: 'firstName',
        label: 'First name',
        value: '',
        order: 1,
      }),

      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }
}
