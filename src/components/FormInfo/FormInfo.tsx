import React from 'react';
import { Organisation, OrganisationTabs } from '@helpers/types';
import Input from '@components/Input/Input';
import { orgToText } from '@helpers/constants';
import cls from './FormInfo.module.css';

interface IProps {
  currentTab: OrganisationTabs;
  isIINonly?: boolean
  currentOrg: Organisation

}

function FormInfo({ currentTab, isIINonly = false, currentOrg }: IProps) {
  const iinText = `Введите ИИН${(isIINonly ? '' : '/БИН')}`;

  return (
    <>
      <label className={cls.label} htmlFor="iin">
        {iinText}
        <Input
          className={cls.input}
          type="text"
          value={currentOrg?.company_tin ?? ''}
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
          value={`${currentTab === OrganisationTabs.others
            ? ''
            : orgToText.get(currentTab)}        ${currentOrg?.company_name}`}
          disabled
          name="company-name"
          id="company-name"
        />
      </label>
    </>
  );
}

export default FormInfo;
