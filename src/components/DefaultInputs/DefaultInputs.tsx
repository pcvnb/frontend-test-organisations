import React from 'react';
import FormInfo from '../FormInfo/FormInfo';
import { OrganisationTabs } from '../../helpers/types';

interface IProps {
  currentTab: OrganisationTabs;
}

function DefaultInputs({ currentTab }: IProps) {
  return (
    <>
      {/* <TaxSystemSelect /> */}
      <FormInfo currentTab={currentTab} />
    </>
  );
}

export default DefaultInputs;
