import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

import { MethodService } from 'src/app/shared/services/method.service';
import { Method } from 'src/app/shared/models/method.model';
import { TransactionType } from 'src/app/shared/enums/transaction-type.enum';

@Component({
  selector: 'app-cashier-modal',
  templateUrl: './cashier-modal.component.html',
  styleUrls: ['./cashier-modal.component.scss']
})
export class CashierModalComponent implements OnInit {
  stage: number;
  methods: Method[];
  loading: boolean;
  selectedMethod: Method;
  type: TransactionType;

  constructor(
    private modal: NzModalRef,
    private methodService: MethodService
  ) {}

  ngOnInit() {
    this.stage = 1;
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

  advanceStage() {
    this.stage += 1;
  }
}
