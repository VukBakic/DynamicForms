import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../field-base';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}
