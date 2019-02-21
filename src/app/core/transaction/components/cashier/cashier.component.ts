import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

import { CashierModalComponent } from '../../containers/cashier-modal/cashier-modal.component';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CashierComponent implements OnInit {
  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  openModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Cashier',
      nzContent: CashierModalComponent,
      nzFooter: [
        {
          label: 'Next',
          type: 'primary',
          show: ({ stage }) => stage === 1,
          disabled: ({ selectedMethod, type }) => {
            return !selectedMethod || !type;
          },
          onClick: componentInstance => {
            componentInstance.advanceStage();
          }
        }
      ]
    });

    // Return a result when closed
    modal.afterClose.subscribe(result =>
      console.log('[afterClose] The result is:', result)
    );
  }
}
