import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MethodService } from 'src/app/shared/services/method.service';
import { Method } from 'src/app/shared/models/method.model';
import { TransactionType } from 'src/app/shared/enums/transaction-type.enum';
import { User } from 'src/app/shared/models/user.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import {
  TransactionRequest,
  Transaction
} from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-cashier-modal',
  templateUrl: './cashier-modal.component.html',
  styleUrls: ['./cashier-modal.component.scss']
})
export class CashierModalComponent implements OnInit {
  stage: number;
  currentFormValid: boolean;
  methods: Method[];
  loading: boolean;
  selectedMethod: Method;
  type: TransactionType;
  userData: User;
  amount: number;
  currency: string;
  attributes: { [key: string]: string };
  newTransaction: Transaction;

  constructor(
    private methodService: MethodService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.stage = 0;
    this.loading = true;
    this.methodService.getMethods().subscribe(
      res => {
        this.loading = false;
        this.methods = res;
      },
      error => {
        this.loading = false;
        console.error(error);
      }
    );
  }

  onMethodSelected({
    method,
    type
  }: {
    method: Method;
    type: TransactionType;
  }) {
    this.selectedMethod = method;
    this.type = type;
  }

  onFormValidityChanged(form: FormGroup) {
    const value = form.value;
    this.currentFormValid = form.valid;

    if (this.currentFormValid) {
      switch (this.stage) {
        case 1:
          this.userData = { ...value };
          break;
        case 2:
          this.amount = value.amount;
          this.currency = value.currency;
          break;
        case 3:
          this.attributes = { ...value };
      }
    }
  }

  advanceStage() {
    this.currentFormValid = false;

    if (this.stage === 3) {
      this.submitForm();
    } else {
      this.stage += 1;
    }
  }

  private submitForm(): void {
    const transaction = this.prepareTransaction();
    this.loading = true;
    this.transactionService.createTransaction(transaction).subscribe(
      res => {
        this.loading = false;
        this.stage += 1;
        this.newTransaction = res;
      },
      error => {
        this.loading = false;
        console.error(error);
      }
    );
  }

  private prepareTransaction(): TransactionRequest {
    const {
      selectedMethod,
      amount,
      currency,
      type,
      attributes,
      userData
    } = this;

    return {
      provider: selectedMethod.name,
      type,
      amount,
      currency,
      attributes,
      user: { ...userData }
    };
  }
}
