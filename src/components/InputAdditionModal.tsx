import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { FieldUi } from '../models/FieldUi';
import { useGetInputAdditionForm } from '../hooks/useGetInputAdditionForm';

interface Props {
  filedUi: FieldUi;
  isOpenModal: boolean;
  closeModal: () => void;
}

function InputAdditionModal({ filedUi, isOpenModal, closeModal }: Props) {
  const { icon, name, id } = filedUi;
  const { InputAdditionForm } = useGetInputAdditionForm(id);

  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="leading-6 text-gray-900">
                  <div className="flex items-center space-x-2 border-b-2 border-gray-200 pb-2 text-2xl font-bold">
                    <Icon icon={icon}></Icon>
                    <span>{name}</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Añade la información necesaria para el campo solicitado
                  </p>
                </Dialog.Title>

                <div className="my-4">
                  <InputAdditionForm />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default InputAdditionModal;
