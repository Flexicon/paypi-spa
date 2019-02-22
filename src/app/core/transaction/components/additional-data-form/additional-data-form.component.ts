import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FormField } from 'src/app/shared/models/form-field.model';
import { Method } from 'src/app/shared/models/method.model';

@Component({
  selector: 'app-additional-data-form',
  templateUrl: './additional-data-form.component.html',
  styleUrls: ['./additional-data-form.component.scss']
})
export class AdditionalDataFormComponent implements OnInit {
  @Input() method: Method;
  @Output() formValidityChanged = new EventEmitter<FormGroup>();
  fields: FormField[];
  formControlsConfig: { [key: string]: any };

  constructor() {}

  ngOnInit() {
    this.fields = [];
    this.formControlsConfig = {};

    this.method.additional_data.forEach(addData => {
      const { name, required } = addData;

      this.fields.push({ ...addData });
      this.formControlsConfig[name] = [
        '',
        [required ? Validators.required : null].filter(Boolean)
      ];
    });
  }

  onFormValidityChanged(form: FormGroup): void {
    this.formValidityChanged.emit(form);
  }
}
