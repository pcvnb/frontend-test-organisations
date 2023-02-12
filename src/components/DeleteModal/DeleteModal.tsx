import { Organisation } from '@helpers/types';
import { useOrgsStore } from '@zustand/store';
import Title from '@components/Title/Title';
import CloseIcon from '@assets/close.svg';
import { useRef } from 'react';
import useFocusEffect from '@helpers/lib/useFocusEffect';
import cls from './DeleteModal.module.css';

interface IProps {
  closeModal: () => void,
  currentOrg: Organisation,
}

function DeleteModal({ closeModal, currentOrg }: IProps) {
  const { removeOrg } = useOrgsStore();
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const onDelete = () => {
    removeOrg(currentOrg.company_id);
    closeModal();
  };

  const onCancel = () => {
    closeModal();
  };

  useFocusEffect({ ref: cancelButtonRef });
  return (
    <div className={cls.modal}>
      <button type="button" className={cls.closeIconBtn} onClick={closeModal}>
        <img src={CloseIcon} alt="close modal" />
      </button>
      <Title className={cls.title}>Удаление организации</Title>
      <p className={cls.text}>Вы уверены, что хотите удалить организацию из списка?</p>
      <div className={cls.buttons}>
        <button type="button" className={cls.cancelButton} onClick={onCancel} ref={cancelButtonRef}>
          Отменить
        </button>
        <button type="button" className={cls.deleteButton} onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
}

export default DeleteModal;
