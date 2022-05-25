import { Icon } from '@iconify/react';

interface Field {
  id: string;
  name: string;
  icon: string;
}

const fields: Field[] = [
  { id: 'text', name: 'Texto', icon: 'bx:text' },
  { id: 'select', name: 'Selección', icon: 'octicon:multi-select-24' },
  { id: 'radiogroup', name: 'Opciones', icon: 'carbon:radio-button-checked' },
];

function InputSidebar() {
  return (
    <aside className="w-80 border-r-2 border-gray-300 pr-8">
      <div className="flex items-center space-x-2 text-2xl">
        <Icon icon="clarity:form-line" />
        <h2 className="font-semibold text-slate-800">Campos</h2>
      </div>
      <p className="mt-2 text-slate-600">
        Da click en los campos de abajo para crear y añadir un campo al formulario
      </p>
      <div className="mt-2 divide-y-2 divide-gray-100">
        {fields.map(({ icon, id, name }) => (
          <button
            key={id}
            className="flex w-full items-center space-x-2 rounded py-3 px-3 text-base transition hover:bg-gray-100"
          >
            <Icon icon={icon}></Icon>
            <span>{name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default InputSidebar;
