import React from 'react';
import { Organisation, OrganisationTabs } from '../../helpers/types';
import Input from '../Input/Input';
import cls from './FormInfo.module.css';
import { orgToText } from '../../helpers/constants';

interface IProps {
  currentTab: OrganisationTabs;
  isIINonly?: boolean
  data: Organisation | null

}

function FormInfo({ currentTab, isIINonly = false, data }: IProps) {
  const iinText = `Введите ИИН${(isIINonly ? '' : '/БИН')}`;

  return (
    <>
      <label className={cls.label} htmlFor="iin">
        {iinText}
        <Input
          className={cls.input}
          type="text"
          value={data?.company_tin ?? ''}
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
            : orgToText.get(currentTab)}        ${data?.company_name}`}
          disabled
          name="company-name"
          id="company-name"
        />
      </label>
    </>
  );
}

export default FormInfo;
