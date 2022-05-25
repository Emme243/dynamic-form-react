import { InputText } from '../FormInputs/InputText';

function InputTextAdditionForm() {
  return (
    <form className="space-y-3">
      <InputText
        type="text"
        icon="ic:baseline-label"
        label="Label"
        placeholder="Escribe el texto que aparecerá arriba del campo"
      />

      <InputText
        type="text"
        icon="akar-icons:text-align-justified"
        label="Placeholder"
        placeholder="Escribe el texto de ayuda (como este)"
      />
    </form>
  );
}

export default InputTextAdditionForm;
