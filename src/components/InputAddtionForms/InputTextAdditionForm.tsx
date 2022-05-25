import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputText } from '../FormInputs/InputText';
import { Button } from '../FormInputs/Button';
import { requiredMsg } from '../../utils/formMessages';

interface FormFields {
  label: string;
  placeholder: string;
}

const schema = yup
  .object({
    label: yup.string().required(requiredMsg('Label')).trim(),
    placeholder: yup.string().required(requiredMsg('Placeholder')).lowercase().trim(),
  })
  .required();

function InputTextAdditionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(schema) });

  const handleOnSubmitForm: SubmitHandler<FormFields> = data => {
    console.log(data);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handleOnSubmitForm)}>
      <InputText
        type="text"
        icon="ic:baseline-label"
        label="Label"
        placeholder="Escribe el texto que aparecerá arriba del campo"
        fieldError={errors.label}
        registerField={register('label')}
      />

      <InputText
        type="text"
        icon="akar-icons:text-align-justified"
        label="Placeholder"
        placeholder="Escribe el texto de ayuda (como este)"
        fieldError={errors.placeholder}
        registerField={register('placeholder')}
      />

      <Button type="submit" color="primary">
        Añadir al campo
      </Button>
    </form>
  );
}

export default InputTextAdditionForm;
