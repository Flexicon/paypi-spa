import { User } from './user.model';

export interface Transaction {
  id: number;
  provider: string;
  type: string;
  currency: string;
  amount: number;
  user: number;
  attributes?: { [key: string]: string };
  start_time: string;
  end_time: string;
  status: string;
}

export interface TransactionRequest {
  provider: string;
  type: string;
  currency: string;
  amount: number;
  user: User;
  attributes: { [key: string]: string };
}
