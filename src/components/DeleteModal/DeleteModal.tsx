import cls from './DeleteModal.module.css';
import Title from '../Title/Title';

interface IProps {
  closeModal: () => void
}

function DeleteModal({ closeModal }: IProps) {
  return (
    <div className={cls.modal}>
      <Title>Удаление организации</Title>
      <p>Вы уверены, что хотите удалить организацию из списка?</p>
      <button type="button" onClick={closeModal}>Отменить</button>
      <button type="button">Удалить</button>
    </div>
  );
}

export default DeleteModal;
