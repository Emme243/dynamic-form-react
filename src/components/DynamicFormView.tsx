import { Icon } from '@iconify/react';

function DynamicFormView() {
  return (
    <div className="flex-grow pl-8">
      <div className="flex items-center space-x-2 text-2xl">
        <Icon icon="fluent:form-20-regular" />
        <h2 className="font-semibold text-slate-800">Mi formulario</h2>
      </div>

      <p className="mt-2 text-gray-600">Formulario vacío</p>
    </div>
  );
}

export default DynamicFormView;
