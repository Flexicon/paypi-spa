import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { USER_DATA_FORM_FIELDS } from './user-data-form.constants';
import { FormField } from 'src/app/shared/models/form-field.model';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDataFormComponent implements OnInit {
  readonly fields: FormField[] = USER_DATA_FORM_FIELDS;
  @Output() formValidityChanged = new EventEmitter<FormGroup>();
  formControlsConfig: { [key: string]: any };

  ngOnInit() {
    // TODO:: remove debugging form data
    this.formControlsConfig = {
      first_name: ['John', [Validators.required, Validators.minLength(2)]],
      last_name: ['Smith', [Validators.required, Validators.minLength(3)]],
      gender: ['M', [Validators.required, Validators.pattern(/[mf]/gi)]],
      email: ['john@smithy.com', [Validators.required, Validators.email]],
      address: [
        '102 Drebeck Rd',
        [Validators.required, Validators.minLength(3)]
      ],
      city: ['Seattle', [Validators.required, Validators.minLength(3)]],
      state: ['WA'],
      zip: ['12432', [Validators.required]],
      country_code: [
        'US',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
      ],
      birthday: ['1990-03-20', Validators.required]
    };
    // this.formControlsConfig = {
    //   first_name: ['', [Validators.required, Validators.minLength(2)]],
    //   last_name: ['', [Validators.required, Validators.minLength(3)]],
    //   gender: [null, [Validators.required, Validators.pattern(/[mf]/gi)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   address: ['', [Validators.required, Validators.minLength(3)]],
    //   city: ['', [Validators.required, Validators.minLength(3)]],
    //   state: [''],
    //   zip: ['', [Validators.required]],
    //   country_code: [
    //     null,
    //     [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
    //   ],
    //   birthday: ['', Validators.required]
    // };
  }

  onFormValidityChanged(form: FormGroup): void {
    if (form.valid) {
      const birthdayControl = form.get('birthday');
      const birthday: Date = birthdayControl.value;
      const year = birthday.getFullYear();
      const month = birthday
        .getMonth()
        .toString()
        .padStart(2, '0');
      const day = birthday
        .getDate()
        .toString()
        .padStart(2, '0');

      birthdayControl.patchValue(`${year}-${month}-${day}`, {
        emitEvent: false
      });
    }
    this.formValidityChanged.emit(form);
  }
}
