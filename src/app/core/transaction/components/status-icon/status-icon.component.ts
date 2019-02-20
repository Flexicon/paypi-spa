import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TransactionStatus } from 'src/app/shared/enums/transaction-status.enum';

interface StatusIcon {
  icon: string;
  color: string;
}

const statusIcons: { [status: string]: StatusIcon } = {
  [TransactionStatus.SUCCESS]: {
    icon: 'check-circle',
    color: '#52C41A'
  },
  [TransactionStatus.FAILED]: {
    icon: 'close-circle',
    color: '#FF0000'
  },
  [TransactionStatus.ERROR]: {
    icon: 'close-circle',
    color: '#EB2F96'
  },
  [TransactionStatus.CANCELLED]: {
    icon: 'info-circle',
    color: '#DDDDDD'
  }
};

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIconComponent implements OnChanges {
  @Input() status: TransactionStatus;
  statusIcon: StatusIcon;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.status) {
      this.statusIcon = statusIcons[changes.status.currentValue];
    }
  }
}
