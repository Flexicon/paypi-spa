import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FormField } from 'src/app/shared/models/form-field.model';
import { AMOUNT_FORM_FIELDS } from './amount-form.constants';

@Component({
  selector: 'app-amount-form',
  templateUrl: './amount-form.component.html',
  styleUrls: ['./amount-form.component.scss']
})
export class AmountFormComponent implements OnInit {
  readonly fields: FormField[] = AMOUNT_FORM_FIELDS;
  @Output() formValidityChanged = new EventEmitter<FormGroup>();
  formControlsConfig: { [key: string]: any };

  constructor() {}

  ngOnInit() {
    this.formControlsConfig = {
      amount: [0, [Validators.required, Validators.min(1)]],
      currency: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
      ]
    };
  }

  onFormValidityChanged(form: FormGroup): void {
    this.formValidityChanged.emit(form);
  }
}
