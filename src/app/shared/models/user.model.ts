export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  address: string;
  city: string;
  state?: string;
  zip: string;
  country_code: string;
  birthday: string;
}
