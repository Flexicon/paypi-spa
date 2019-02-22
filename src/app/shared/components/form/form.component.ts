import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { FormField } from '../../models/form-field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() fields: FormField[];
  @Input() formControlsConfig: { [key: string]: any };
  @Output() formValidityChanged = new EventEmitter<FormGroup>();
  destroy$ = new Subject<boolean>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(this.formControlsConfig);

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        map(() => this.form.valid)
      )
      .subscribe(() => {
        this.formValidityChanged.emit(this.form);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
