import InputTextAdditionForm from '../components/InputAddtionForms/InputTextAdditionForm';
import InputRadioAdditionForm from '../components/InputAddtionForms/InputRadioAdditionForm';
import InputSelectAdditionForm from '../components/InputAddtionForms/InputSelectAdditionForm';
import { FieldId } from '../models/FieldUi';

export function useGetInputAdditionForm(id: FieldId) {
  let InputAdditionForm;
  switch (id) {
    case 'text':
      InputAdditionForm = InputTextAdditionForm;
      break;
    case 'radio':
      InputAdditionForm = InputRadioAdditionForm;
      break;
    case 'select':
      InputAdditionForm = InputSelectAdditionForm;
      break;
    default:
      InputAdditionForm = InputTextAdditionForm;
  }

  return { InputAdditionForm };
}
