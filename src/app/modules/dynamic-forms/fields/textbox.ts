import { FieldBase } from '../field-base';

export class TextBoxField extends FieldBase<string> {
  override controlType = 'textbox';
}
