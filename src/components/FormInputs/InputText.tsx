import { HTMLInputTypeAttribute } from 'react';
import { Icon } from '@iconify/react';

interface Props {
  containerClass?: string;
  icon: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export function InputText({ containerClass = '', icon, label, placeholder, type }: Props) {
  return (
    <div className={containerClass}>
      <span className="pl-2.5 text-sm font-bold text-gray-400">{label}</span>
      <div className="flex items-center overflow-hidden rounded-lg border border-gray-50 bg-gray-50 text-black focus-within:border-sky-700">
        <div className="h-full py-2.5 px-4 text-gray-400 transition-none peer-focus:text-sky-700">
          <Icon icon={icon} />
        </div>
        <input
          type={type}
          className="peer grow bg-gray-50 py-2.5 text-black placeholder-gray-400 outline-0"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
