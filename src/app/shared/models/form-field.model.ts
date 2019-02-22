export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}
