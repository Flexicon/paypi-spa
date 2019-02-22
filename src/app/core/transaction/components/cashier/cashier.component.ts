import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

import { CashierModalComponent } from '../../containers/cashier-modal/cashier-modal.component';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CashierComponent implements OnInit {
  @Output() transactionMade = new EventEmitter();

  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  openModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Make a transaction',
      nzContent: CashierModalComponent,
      nzWidth: 720,
      nzFooter: [
        {
          label: 'Next',
          type: 'primary',
          show: ({ stage }) => stage < 4,
          disabled: componentInstance => {
            return this.determineIfBtnDisabled(componentInstance);
          },
          onClick: componentInstance => {
            componentInstance.advanceStage();
          }
        },
        {
          label: 'Close',
          type: 'default',
          show: ({ stage }) => stage === 4,
          onClick: componentInstance => {
            modal.close(true);
          }
        }
      ],
      nzOnCancel: componentInstance => {
        if (!!componentInstance.newTransaction) {
          this.transactionMade.emit();
        }
      }
    });

    modal.afterClose.subscribe(result => {
      if (result) {
        this.transactionMade.emit();
      }
    });
  }

  private determineIfBtnDisabled(instance: CashierModalComponent): boolean {
    const { stage, selectedMethod, type, currentFormValid } = instance;

    switch (stage) {
      case 0:
        return !selectedMethod || !type;
      case 1:
      case 2:
      case 3:
        return !currentFormValid;
      default:
        return false;
    }
  }
}
