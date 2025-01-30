import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DynamicFormService {
  constructor(private fb: FormBuilder) {}

  createFormFromModel<T extends object>(
    model: T,
    exclude: string[] = [],
    validators: { [key: string]: ValidatorFn[] } = {}
  ): FormGroup {
    const controls: { [key: string]: FormControl } = {};

    for (const key of Object.keys(model)) {
      if (!exclude.includes(key)) {
        controls[key] = new FormControl(
          (model as any)[key],
          validators[key] || [Validators.required] // Use custom validators or default to required
        );
      }
    }
    return this.fb.group(controls);
  }

  getInvalidFields(formGroup: FormGroup): string[] {
    const invalidFields: string[] = [];

    for (const formKey in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(formKey)) {
        const control = formGroup.get(formKey);
        if (control && control.invalid) {
          invalidFields.push(formKey);
        }
      }
    }

    return invalidFields;
  }

}
