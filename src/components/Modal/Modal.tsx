import React, { useEffect } from 'react';
import classNames from 'classnames';
import DeleteModal from '@components/DeleteModal/DeleteModal';
import { ModalType, Organisation } from '@helpers/types';
import EditModal from '@components/EditModal/EditModal';
import useKeyEffect from '@helpers/lib/useKeyEffect';
import cls from './Modal.module.css';

interface IProps {
  isOpen: boolean,
  modalType: ModalType,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>,
  currentOrg: Organisation,
  close: () => void
}

function Modal({
  isOpen, modalType, setModalType, currentOrg, close,
}: IProps) {
  useEffect(() => {
    if (!isOpen) {
      setModalType(ModalType.none);
    }
  }, [isOpen, setModalType]);
  useKeyEffect('Escape', close);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { classList } = e.target as HTMLDivElement;
    if ([...classList].includes(cls.overlay)) {
      close();
    }
  };

  return (

    <div
      className={classNames(cls.overlay, { [cls.showOverlay]: isOpen })}
      role="dialog"
      onClick={onOverlayClick}
    >
      {modalType === ModalType.edit
            && <EditModal currentOrg={currentOrg} close={close} />}
      {modalType === ModalType.delete
            && <DeleteModal closeModal={close} currentOrg={currentOrg} />}
    </div>
  );
}

export default Modal;
