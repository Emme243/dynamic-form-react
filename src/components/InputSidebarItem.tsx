import { FieldUi } from '../models/FieldUi';
import { Icon } from '@iconify/react';

function InputSidebarItem({ icon, name, id }: FieldUi) {
  return (
    <button
      key={id}
      className="flex w-full items-center space-x-2 rounded py-3 px-3 text-base transition hover:bg-gray-100"
    >
      <Icon icon={icon}></Icon>
      <span>{name}</span>
    </button>
  );
}

export default InputSidebarItem;
