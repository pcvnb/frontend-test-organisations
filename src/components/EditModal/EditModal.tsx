import React from 'react';
import FormInfo from '../FormInfo/FormInfo';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import OrgTypesItem from '../OrgTypesItem/OrgTypesItem';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';

interface IProps {
  isOpen: boolean,
}

const options = ['ТОО', 'ИП', 'Прочие'];

function EditModal({ isOpen }: IProps) {
  if (!isOpen) return null;

  return (
    <div className={cls.modal}>
      <div className={cls.form}>
        <Title>Редактировать данные организации</Title>
        <ul className={cls.orgTypes}>
          {options.map((option) => <OrgTypesItem>{option}</OrgTypesItem>)}
        </ul>

        <div className={cls.inputs}>
          <TaxSystemSelect />
          <FormInfo />
        </div>
        <button type="submit" className={cls.button}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditModal;
