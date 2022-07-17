import { FieldBase } from '../field-base';

export class RadioField extends FieldBase<string> {
  override controlType = 'radio';
}
