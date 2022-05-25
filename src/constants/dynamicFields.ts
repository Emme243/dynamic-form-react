import { FieldUi } from '../models/FieldUi';

export const fields: FieldUi[] = [
  {
    id: 'text',
    name: 'Texto',
    icon: 'bx:text',
    htmlInputAttrs: { label: '', placeholder: '' },
  },
  {
    id: 'select',
    name: 'Selección',
    icon: 'octicon:multi-select-24',
    htmlInputAttrs: { default: '', options: [''] },
  },
  {
    id: 'radiogroup',
    name: 'Opciones',
    icon: 'carbon:radio-button-checked',
    htmlInputAttrs: { options: [''] },
  },
];
