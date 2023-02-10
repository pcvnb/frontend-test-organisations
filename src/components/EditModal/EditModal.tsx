import React, { useState } from 'react';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import FormInputs from '../FormInputs/FormInputs';
import { OrganisationTabs } from '../../helpers/types';
import OrgTab from '../OrgTab/OrgTab';

function EditModal() {
  const [currentTab, setCurrentTab] = useState<OrganisationTabs>(OrganisationTabs.too);

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
