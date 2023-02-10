import React from 'react';
import { OrganisationTabs } from '../../helpers/types';
import Input from '../Input/Input';
import { organisations } from '../../helpers/mock';
import cls from './FormInfo.module.css';

interface IProps {
  currentTab: OrganisationTabs;
  isIINonly?: boolean
}

function FormInfo({ currentTab, isIINonly = false }: IProps) {
  const iinText = `Введите ИИН${(isIINonly ? '' : '/БИН')}`;

  return (
    <>
      <label className={cls.label} htmlFor="iin">
        {iinText}
        <Input
          className={cls.input}
          type="text"
          value={organisations[0].company_tin}
          disabled
          name="iin"
          id="iin"
        />
      </label>
      <label className={cls.label} htmlFor="company-name">
        Введите название компании
        <Input
          className={cls.input}
          type="text"
          value={`${currentTab}        ${organisations[0].company_tin}`}
          disabled
          name="company-name"
          id="company-name"
        />
      </label>
    </>
  );
}

export default FormInfo;
