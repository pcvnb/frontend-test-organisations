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

  const isOwnershipSelectVisible = (
    currentSubtype === Subtypes.legalEntities
        || currentSubtype === Subtypes.privatePractice
  );
  const isTaxSystemSelectVisible = currentSubtype === Subtypes.legalEntities;
  const isIINonly = (
    currentSubtype === Subtypes.individuals
        || currentSubtype === Subtypes.privatePractice
  );

  return (
    <>
      <SubtypesFieldset
        currentSubtype={currentSubtype}
        setCurrentSubtype={setCurrentSubtype}
      />
      {isOwnershipSelectVisible && <OwnershipSelect />}
      {isTaxSystemSelectVisible && <TaxSystemSelect />}
      <FormInfo
        currentTab={currentTab}
        isIINonly={isIINonly}
      />
    </>
  );
}

export default OthersInputs;
