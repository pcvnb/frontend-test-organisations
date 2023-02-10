import React, { useState } from 'react';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import FormInputs from '../FormInputs/FormInputs';
import { OrganisationTabs } from '../../helpers/types';
import OrgTab from '../OrgTab/OrgTab';

interface IProps {
  isOpen: boolean,
}

function EditModal({ isOpen }: IProps) {
  const [currentTab, setCurrentTab] = useState<OrganisationTabs>(OrganisationTabs.too);

  if (!isOpen) return null;

  return (
    <div className={cls.modal}>
      <div className={cls.form}>
        <Title>Редактировать данные организации</Title>
        <ul className={cls.orgTabs}>
          {Object.values(OrganisationTabs).map((tabType) => (
            <OrgTab
              currentTab={currentTab}
              tabType={tabType}
              setCurrentTab={setCurrentTab}
              key={tabType}
            >
              {tabType}
            </OrgTab>
          ))}
        </ul>
        <FormInputs currentTab={currentTab} />
        <button type="submit" className={cls.button}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditModal;
