import { Observable } from 'rxjs';
import { FieldBase } from '../field-base';

export interface FieldProvider {
  getFields(): Observable<FieldBase<any>[]>;
}
