import React from 'react';
import FormInfo from '../FormInfo/FormInfo';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import OrgTypesItem from '../OrgTypesItem/OrgTypesItem';

interface IProps {
  isOpen: boolean,
}

const options = ['ТОО', 'ИП', 'Прочие'];

function EditModal({ isOpen }: IProps) {
  if (!isOpen) return null;

  return (
    <div className={cls.modal}>
      <Title>Редактировать данные организации</Title>
      <ul className={cls.orgTypes}>
        {options.map((option) => <OrgTypesItem>{option}</OrgTypesItem>)}
      </ul>

      <FormInfo />
    </div>
  );
}

export default EditModal;
