import { fields } from '../constants/dynamicFields';
import { Icon } from '@iconify/react';
import InputSidebarItem from './InputSidebarItem';

function InputSidebar() {
  return (
    <aside className="w-80 border-r-2 border-gray-200 pr-8">
      <div className="flex items-center space-x-2 text-2xl">
        <Icon icon="clarity:form-line" />
        <h2 className="font-semibold text-slate-800">Campos</h2>
      </div>
      <p className="mt-2 text-slate-600">
        Da click en los campos de abajo para crear y añadir un campo al formulario
      </p>
      <div className="mt-2 divide-y-2 divide-gray-100">
        {fields.map(field => (
          <InputSidebarItem {...field} />
        ))}
      </div>
    </aside>
  );
}

export default InputSidebar;
