import { FieldUi } from '../models/FieldUi';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import InputAdditionModal from './InputAdditionModal';

function InputSidebarItem(fieldUi: FieldUi) {
  const { icon, name, id } = fieldUi;

  let [isOpenModal, setIsOpenModal] = useState(false);
  function closeModal() {
    setIsOpenModal(false);
  }
  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div>
      <button
        key={id}
        onClick={() => openModal()}
        className="flex w-full items-center space-x-2 rounded py-3 px-3 text-base transition hover:bg-gray-100"
      >
        <Icon icon={icon}></Icon>
        <span>{name}</span>
      </button>

      <InputAdditionModal closeModal={closeModal} isOpenModal={isOpenModal} filedUi={fieldUi} />
    </div>
  );
}

export default InputSidebarItem;
