import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  @Input() transaction: Transaction;
  user: User;
  loading: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getUser(this.transaction.user).subscribe(
      res => {
        this.loading = false;
        this.user = res;
      },
      err => {
        this.loading = false;
        console.error(err);
      }
    );
  }
}
