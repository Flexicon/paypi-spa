import { FormField } from 'src/app/shared/models/form-field.model';

export const USER_DATA_FORM_FIELDS: FormField[] = [
  {
    name: 'first_name',
    label: 'First name',
    type: 'text'
  },
  {
    name: 'last_name',
    label: 'Last name',
    type: 'text'
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    placeholder: 'Select a gender',
    options: [{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]
  },
  {
    name: 'email',
    label: 'E-Mail',
    type: 'email'
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text'
  },
  {
    name: 'city',
    label: 'City',
    type: 'text'
  },
  {
    name: 'state',
    label: 'State',
    type: 'text'
  },
  {
    name: 'zip',
    label: 'Zip/Postal code',
    type: 'text'
  },
  {
    name: 'country_code',
    label: 'Country',
    type: 'text',
    placeholder: 'two letter country code, ie: GB'
  },
  {
    name: 'birthday',
    label: 'Birthday',
    type: 'text'
  }
];
