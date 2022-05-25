import { HTMLInputTypeAttribute } from 'react';
import { Icon } from '@iconify/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  containerClass?: string;
  fieldError?: FieldError;
  icon: string;
  label: string;
  placeholder: string;
  registerField?: UseFormRegisterReturn;
  type: HTMLInputTypeAttribute;
}

export function InputText({
  containerClass = '',
  fieldError,
  icon,
  label,
  placeholder,
  registerField,
  type,
}: Props) {
  return (
    <div className={containerClass}>
      <span className="pl-2.5 text-sm font-bold text-gray-400">{label}</span>
      <div
        className={`flex items-center overflow-hidden rounded-lg border border-gray-50 bg-gray-50 text-black focus-within:border-sky-700 ${
          fieldError ? 'border-red-600 focus-within:border-red-600' : ''
        }`}
      >
        <input
          type={type}
          className="peer grow bg-gray-50 py-2.5 pl-5 text-black placeholder-gray-400 outline-0"
          placeholder={placeholder}
          {...registerField}
        />
        <div className="h-full py-2.5 px-5 text-gray-400 transition-none peer-focus:text-sky-700">
          <Icon icon={icon} className={`${fieldError ? 'text-red-600' : ''}`} />
        </div>
      </div>
      {/*Error message*/}
      {fieldError && (
        <div className="mt-1 pr-2.5 text-right text-sm font-semibold text-red-600">
          {fieldError.message}
        </div>
      )}
    </div>
  );
}
