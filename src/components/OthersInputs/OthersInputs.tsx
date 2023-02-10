import React, { useEffect } from 'react';
import SubtypesFieldset from '../SubtypesFieldset/SubtypesFieldset';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';
import FormInfo from '../FormInfo/FormInfo';
import {
  Organisation, OrganisationTabs, Subtypes, TaxSystem,
} from '../../helpers/types';
import OwnershipSelect from '../OwnershipSelect/OwnershipSelect';

interface IProps {
  currentTab: OrganisationTabs;
  currentSubtype: Subtypes;
  setCurrentSubtype: React.Dispatch<React.SetStateAction<Subtypes>>;
  currentOwnershipId: number;
  setCurrentOwnershipId: React.Dispatch<React.SetStateAction<number>>;
  currentTaxSystemId: number,
  setCurrentTaxSystemId: React.Dispatch<React.SetStateAction<number>>,
  availableTaxSystems: TaxSystem[]
  currentOrg: Organisation
}

function OthersInputs({
  currentTab,
  setCurrentSubtype,
  currentSubtype,
  currentOwnershipId,
  setCurrentOwnershipId,
  currentTaxSystemId,
  setCurrentTaxSystemId,
  availableTaxSystems,
  currentOrg,
}: IProps) {
  const isOwnershipSelectVisible = (
    currentSubtype === Subtypes.legalEntities
        || currentSubtype === Subtypes.privatePractice
  );
  const isTaxSystemSelectVisible = currentSubtype === Subtypes.legalEntities;
  const isIINonly = (
    currentSubtype === Subtypes.individuals
        || currentSubtype === Subtypes.privatePractice
  );

  useEffect(() => {
    setCurrentSubtype(Subtypes.legalEntities);
  }, []);

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
                  availableTaxSystems={availableTaxSystems}
                  currentTaxSystemId={currentTaxSystemId}
                  setCurrentTaxSystemId={setCurrentTaxSystemId}
                />
                )}
      <FormInfo
        currentTab={currentTab}
        isIINonly={isIINonly}
        currentOrg={currentOrg}
      />
    </>
  );
}

export default OthersInputs;
