import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Method } from 'src/app/shared/models/method.model';
import { TransactionType } from 'src/app/shared/enums/transaction-type.enum';

interface MethodTab {
  active: boolean;
  name: string;
  type: TransactionType;
  icon: string;
}

@Component({
  selector: 'app-method-selection',
  templateUrl: './method-selection.component.html',
  styleUrls: ['./method-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodSelectionComponent {
  @Input() methods: Method[];
  @Input() selectedMethodName: string;
  @Output() methodSelected = new EventEmitter<{
    method: Method;
    type: TransactionType;
  }>();
  tabs: MethodTab[] = [
    {
      active: true,
      name: 'Deposit',
      type: TransactionType.DEPOSIT,
      icon: 'arrow-up'
    },
    {
      active: false,
      name: 'Withdraw',
      type: TransactionType.WITHDRAW,
      icon: 'arrow-down'
    }
  ];

  selectMethod(method: Method, type: TransactionType) {
    this.methodSelected.emit({ method, type });
  }
}
