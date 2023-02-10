import React from 'react';
import FormInfo from '../FormInfo/FormInfo';
import { Organisation, OrganisationTabs, TaxSystem } from '../../helpers/types';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';

interface IProps {
  currentTab: OrganisationTabs;
  currentTaxSystemId: number,
  setCurrentTaxSystemId: React.Dispatch<React.SetStateAction<number>>,
  availableTaxSystems: TaxSystem[]
  data: Organisation | null;
}

function DefaultInputs({
  currentTab,
  currentTaxSystemId,
  setCurrentTaxSystemId,
  availableTaxSystems,
  data,
}: IProps) {
  return (
    <>
      <TaxSystemSelect
        availableTaxSystems={availableTaxSystems}
        currentTaxSystemId={currentTaxSystemId}
        setCurrentTaxSystemId={setCurrentTaxSystemId}
      />
      <FormInfo currentTab={currentTab} data={data} />
    </>
  );
}

export default DefaultInputs;
