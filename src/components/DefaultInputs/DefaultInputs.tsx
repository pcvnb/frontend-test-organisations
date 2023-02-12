import React from 'react';
import FormInfo from '@components/FormInfo/FormInfo';
import { Organisation, OrganisationTabs, TaxSystem } from '@helpers/types';
import TaxSystemSelect from '@components/TaxSystemSelect/TaxSystemSelect';

interface IProps {
  currentTab: OrganisationTabs;
  currentTaxSystemId: number,
  setCurrentTaxSystemId: React.Dispatch<React.SetStateAction<number>>,
  availableTaxSystems: TaxSystem[]
  currentOrg: Organisation;
}

function DefaultInputs({
  currentTab,
  currentTaxSystemId,
  setCurrentTaxSystemId,
  availableTaxSystems,
  currentOrg,
}: IProps) {
  return (
    <>
      <TaxSystemSelect
        availableTaxSystems={availableTaxSystems}
        currentTaxSystemId={currentTaxSystemId}
        setCurrentTaxSystemId={setCurrentTaxSystemId}
      />
      <FormInfo currentTab={currentTab} currentOrg={currentOrg} />
    </>
  );
}

export default DefaultInputs;
