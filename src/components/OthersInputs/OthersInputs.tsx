import React, { useState } from 'react';
import SubtypesFieldset from '../SubtypesFieldset/SubtypesFieldset';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';
import FormInfo from '../FormInfo/FormInfo';
import { OrganisationTabs, Subtypes, TaxSystem } from '../../helpers/types';
import OwnershipSelect from '../OwnershipSelect/OwnershipSelect';

interface IProps {
  currentTab: OrganisationTabs;
  currentTaxSystemId: number,
  setCurrentTaxSystemId: React.Dispatch<React.SetStateAction<number>>,
  availableTaxSystems: TaxSystem[]
  currentOwnershipId: number;
  setCurrentOwnershipId: React.Dispatch<React.SetStateAction<number>>;
}

function OthersInputs({
  currentTab, currentTaxSystemId,
  setCurrentTaxSystemId,
  availableTaxSystems,
  currentOwnershipId,
  setCurrentOwnershipId,
}: IProps) {
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
      {isOwnershipSelectVisible
                && (
                <OwnershipSelect
                  currentSubtype={currentSubtype}
                  currentOwnershipId={currentOwnershipId}
                  setCurrentOwnershipId={setCurrentOwnershipId}
                />
                )}
      {isTaxSystemSelectVisible
                && (
                <TaxSystemSelect
                  currentTaxSystemId={currentTaxSystemId}
                  setCurrentTaxSystemId={setCurrentTaxSystemId}
                  availableTaxSystems={availableTaxSystems}
                />
                )}
      <FormInfo
        currentTab={currentTab}
        isIINonly={isIINonly}
      />
    </>
  );
}

export default OthersInputs;
