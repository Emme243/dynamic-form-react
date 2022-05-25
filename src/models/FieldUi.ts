import { Input } from './Input';

export type FieldId = 'text' | 'select' | 'radio';

export interface FieldUi {
  id: FieldId;
  name: string;
  icon: string;
  htmlInputAttrs: Input;
}
