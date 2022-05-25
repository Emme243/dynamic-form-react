import { Icon } from '@iconify/react';

function DynamicFormView() {
  return (
    <div className="flex-grow pl-8">
      <div className="flex items-center space-x-2 text-2xl">
        <Icon icon="fluent:form-20-regular" />
        <h2 className="font-semibold text-slate-800">Mi formulario</h2>
      </div>
    </div>
  );
}

export default DynamicFormView;
