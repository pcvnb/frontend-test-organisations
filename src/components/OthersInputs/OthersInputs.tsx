import React from 'react';
import SubtypesFieldset from '../SubtypesFieldset/SubtypesFieldset';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';
import FormInfo from '../FormInfo/FormInfo';
import { OrganisationTabs } from '../../helpers/types';

interface IProps {
  currentTab: OrganisationTabs;
}

function OthersInputs({ currentTab }: IProps) {
  return (
    <>
      <SubtypesFieldset />
      <TaxSystemSelect />
      <FormInfo currentTab={currentTab} />
    </>
  );
}

export default OthersInputs;
