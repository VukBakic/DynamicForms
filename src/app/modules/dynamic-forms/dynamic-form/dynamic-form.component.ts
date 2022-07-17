import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../field-base';
import { FieldControlService } from '../service/field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldBase<any>[] | null = [];
  @Output() onSubmit = new EventEmitter();

  form!: FormGroup;

  constructor(private fieldControlService: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(
      this.fields as FieldBase<any>[]
    );
  }
}
