import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TransactionsComponent } from './transaction/scenes/transactions/transactions.component';
import { TransactionsTableComponent } from './transaction/components/transactions-table/transactions-table.component';
import { CashierComponent } from './transaction/components/cashier/cashier.component';
import { StatusIconComponent } from './transaction/components/status-icon/status-icon.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TransactionsComponent, TransactionsTableComponent, CashierComponent, StatusIconComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
