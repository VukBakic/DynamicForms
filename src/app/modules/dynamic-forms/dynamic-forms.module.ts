import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field-component/field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [FieldComponent, DynamicFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FieldComponent, DynamicFormComponent],
})
export class DynamicFormsModule {}
