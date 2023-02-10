import React, { useState } from 'react';
import SubtypesFieldset from '../SubtypesFieldset/SubtypesFieldset';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';
import FormInfo from '../FormInfo/FormInfo';
import { OrganisationTabs, Subtypes } from '../../helpers/types';
import OwnershipSelect from '../OwnershipSelect/OwnershipSelect';

interface IProps {
  currentTab: OrganisationTabs;
}

function OthersInputs({ currentTab }: IProps) {
  const [currentSubtype, setCurrentSubtype] = useState(Subtypes.legalEntities);

  return (
    <>
      <SubtypesFieldset
        currentSubtype={currentSubtype}
        setCurrentSubtype={setCurrentSubtype}
      />
      <OwnershipSelect />
      <TaxSystemSelect />
      <FormInfo currentTab={currentTab} />
    </>
  );
}

export default OthersInputs;
