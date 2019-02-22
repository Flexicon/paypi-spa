import { FormField } from 'src/app/shared/models/form-field.model';

export const AMOUNT_FORM_FIELDS: FormField[] = [
  {
    name: 'amount',
    label: 'Amount',
    type: 'number'
  },
  {
    name: 'currency',
    label: 'Currency',
    type: 'select',
    placeholder: 'Select a currency',
    options: [
      { value: 'EUR', label: '€ Euro' },
      { value: 'USD', label: '$ American Dollar' },
      { value: 'GBP', label: '£ Great British Pound' },
      { value: 'PLN', label: 'PLN Polish Zloty' }
    ]
  }
];
