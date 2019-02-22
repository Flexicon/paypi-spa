import { TransactionType } from '../enums/transaction-type.enum';

export interface AdditionalData {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface Method {
  name: string;
  label: string;
  types: TransactionType[];
  additional_data: AdditionalData[];
}
