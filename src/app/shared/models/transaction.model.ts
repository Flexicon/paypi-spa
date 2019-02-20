export interface Transaction {
  id: number;
  provider: string;
  type: string;
  amount: number;
  user: number;
  attributes?: any;
  start_time: string;
  end_time: string;
  status: string;
}
