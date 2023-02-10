import React from 'react';
import cls from './FormInputs.module.css';
import { OrganisationTabs } from '../../helpers/types';
import OthersInputs from '../OthersInputs/OthersInputs';
import DefaultInputs from '../DefaultInputs/DefaultInputs';

interface IProps {
  currentTab: OrganisationTabs;
}

function FormInputs({ currentTab }: IProps) {
  return (
    <div className={cls.inputs}>
      {currentTab === OrganisationTabs.others && <OthersInputs currentTab={currentTab} />}
      {currentTab !== OrganisationTabs.others && <DefaultInputs currentTab={currentTab} />}
    </div>
  );
}

export default FormInputs;
