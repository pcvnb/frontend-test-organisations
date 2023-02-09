import React from 'react';
import FormInfo from '../FormInfo/FormInfo';
import cls from './EditModal.module.css';
import Title from '../Title/Title';

interface IProps {
  isOpen: boolean,
}

const options = ['ТОО', 'ИП', 'Прочие'];

function EditModal({ isOpen }: IProps) {
  if (!isOpen) return null;

  return (
    <div className={cls.modal}>
      <Title>Редактировать данные организации</Title>
      <ul>
        {options.map((option) => <li>{option}</li>)}
      </ul>

      <FormInfo />
    </div>
  );
}

export default EditModal;
