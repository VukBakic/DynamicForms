import {
  AbstractControlOptions,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class FieldBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  placeholder: string;
  controlOptions: AbstractControlOptions | null;
  asyncValidators: AsyncValidatorFn[];
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      placeholder?: string;
      controlOptions?: AbstractControlOptions;
      asyncValidators?: AsyncValidatorFn[] | null;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.controlOptions = options.controlOptions || null;
    this.asyncValidators = options.asyncValidators || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
