import React, { useMemo, useState } from 'react';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import { Organisation, OrganisationTabs, Subtypes } from '../../helpers/types';
import OrgTab from '../OrgTab/OrgTab';
import OthersInputs from '../OthersInputs/OthersInputs';
import DefaultInputs from '../DefaultInputs/DefaultInputs';
import { mainIdsMap, orgToText } from '../../helpers/constants';
import { useFormToSystemsStore, useOwnershipsStore, useTaxSystemsStore } from '../../zustand/store';

interface IProps {
  currentOrg: Organisation;
  close: () => void;
}

function EditModal({ currentOrg, close }: IProps) {
  const { ownerships } = useOwnershipsStore();
  const { taxSystems } = useTaxSystemsStore();
  const { formsToSystems } = useFormToSystemsStore();
  const orgOwnership = ownerships.find((item) => item.id === currentOrg?.form_id);
  const orgTaxSystem = taxSystems.find((item) => item.id === currentOrg?.tax_id);

  const [currentTab, setCurrentTab] = useState<OrganisationTabs>(OrganisationTabs.too);
  const [currentSubtype, setCurrentSubtype] = useState<Subtypes>(Subtypes.none);
  const [currentOwnershipId, setCurrentOwnershipId] = useState(orgOwnership!.id);
  const [currentTaxSystemId, setCurrentTaxSystemId] = useState(orgTaxSystem!.id);
  const taxId = currentSubtype === Subtypes.none
    ? mainIdsMap.get(currentTab)
    : mainIdsMap.get(currentSubtype);

  const availableTaxSystemsIds = useMemo(() => formsToSystems
    .filter((item) => (item.form_ownership_id === taxId))
    .map((item) => item.tax_system_id), [taxId]);

  const availableTaxSystems = useMemo(() => taxSystems
    .filter((item) => availableTaxSystemsIds.includes(item.id)), [taxId]);

  return (
    <div className={cls.modal}>
      <div className={cls.form}>
        <Title>Редактировать данные организации</Title>
        <ul className={cls.orgTabs}>
          {Object.values(OrganisationTabs).map((tabType) => (
            <OrgTab
              currentTab={currentTab}
              tabType={tabType}
              setCurrentTab={setCurrentTab}
              key={tabType}
            >
              {orgToText.get(tabType) as string}
            </OrgTab>
          ))}
        </ul>
        <div className={cls.inputs}>
          {currentTab === OrganisationTabs.others
            ? (
              <OthersInputs
                currentSubtype={currentSubtype}
                currentTab={currentTab}
                setCurrentSubtype={setCurrentSubtype}
                currentTaxSystemId={currentTaxSystemId}
                currentOwnershipId={currentOwnershipId}
                setCurrentTaxSystemId={setCurrentTaxSystemId}
                setCurrentOwnershipId={setCurrentOwnershipId}
                availableTaxSystems={availableTaxSystems}
                currentOrg={currentOrg}
              />
            )
            : (
              <DefaultInputs
                currentTab={currentTab}
                availableTaxSystems={availableTaxSystems}
                currentTaxSystemId={currentTaxSystemId}
                setCurrentTaxSystemId={setCurrentTaxSystemId}
                currentOrg={currentOrg}
              />
            )}
        </div>
        <button type="submit" className={cls.button} onClick={close}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditModal;
