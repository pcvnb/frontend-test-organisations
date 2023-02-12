import { Organisation } from '@helpers/types';
import { useOrgsStore } from '@zustand/store';
import Title from '@components/Title/Title';
import CloseIcon from '@assets/close.svg';
import cls from './DeleteModal.module.css';

interface IProps {
  closeModal: () => void,
  currentOrg: Organisation,
}

function DeleteModal({ closeModal, currentOrg }: IProps) {
  const { removeOrg } = useOrgsStore();
  const onDelete = () => {
    closeModal();
    removeOrg(currentOrg.company_id);
  };

  const onCancel = () => {
    closeModal();
  };

  return (
    <div className={cls.modal}>
      <button type="button" className={cls.closeIconBtn} onClick={closeModal}>
        <img src={CloseIcon} alt="close modal" />
      </button>
      <Title className={cls.title}>Удаление организации</Title>
      <p className={cls.text}>Вы уверены, что хотите удалить организацию из списка?</p>
      <div className={cls.buttons}>
        <button type="button" className={cls.cancelButton} onClick={onCancel}>Отменить</button>
        <button type="button" className={cls.deleteButton} onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
}

export default DeleteModal;
