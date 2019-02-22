import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TransactionsComponent } from './transaction/scenes/transactions/transactions.component';
import { TransactionsTableComponent } from './transaction/components/transactions-table/transactions-table.component';
import { StatusIconComponent } from './transaction/components/status-icon/status-icon.component';
import { MethodSelectionComponent } from './transaction/components/method-selection/method-selection.component';
import { CashierComponent } from './transaction/components/cashier/cashier.component';
import { CashierModalComponent } from './transaction/containers/cashier-modal/cashier-modal.component';
import { UserDataFormComponent } from './transaction/components/user-data-form/user-data-form.component';
import { AmountFormComponent } from './transaction/components/amount-form/amount-form.component';
import { AdditionalDataFormComponent } from './transaction/components/additional-data-form/additional-data-form.component';
import { ThankYouComponent } from './transaction/components/thank-you/thank-you.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TransactionsComponent,
    TransactionsTableComponent,
    CashierComponent,
    StatusIconComponent,
    CashierModalComponent,
    MethodSelectionComponent,
    UserDataFormComponent,
    AmountFormComponent,
    AdditionalDataFormComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent],
  entryComponents: [CashierModalComponent]
})
export class CoreModule {}
