import cls from './DeleteModal.module.css';
import Title from '../Title/Title';
import CloseIcon from '../../assets/close.svg';

interface IProps {
  closeModal: () => void
}

function DeleteModal({ closeModal }: IProps) {
  return (
    <div className={cls.modal}>
      <button type="button" onClick={closeModal}>
        <img src={CloseIcon} className={cls.closeIcon} alt="close modal" />
      </button>
      <Title className={cls.title}>Удаление организации</Title>
      <p className={cls.text}>Вы уверены, что хотите удалить организацию из списка?</p>
      <div className={cls.buttons}>
        <button type="button" className={cls.cancelButton} onClick={closeModal}>Отменить</button>
        <button type="button" className={cls.deleteButton} onClick={closeModal}>Удалить</button>
      </div>
    </div>
  );
}

export default DeleteModal;
