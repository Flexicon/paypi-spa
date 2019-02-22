import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  exports: [FormComponent]
})
export class SharedModule {}
