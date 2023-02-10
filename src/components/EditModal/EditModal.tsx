import React, { useMemo, useState } from 'react';
import cls from './EditModal.module.css';
import Title from '../Title/Title';
import { Organisation, OrganisationTabs } from '../../helpers/types';
import OrgTab from '../OrgTab/OrgTab';
import OthersInputs from '../OthersInputs/OthersInputs';
import DefaultInputs from '../DefaultInputs/DefaultInputs';
import { formsToSystems, ownerships, taxSystems } from '../../helpers/mock';

interface IProps {
  data: Organisation | null
}

function EditModal({ data }: IProps) {
  const [currentTab, setCurrentTab] = useState<OrganisationTabs>(OrganisationTabs.too);

  const orgOwnership = ownerships.find((item) => item.id === data?.form_id);
  const orgTaxSystem = taxSystems.find((item) => item.id === data?.tax_id);
  const [currentOwnershipId, setCurrentOwnershipId] = useState(orgOwnership!.id);
  const [currentTaxSystemId, setCurrentTaxSystemId] = useState(orgTaxSystem!.id);

  const currentOwnership = ownerships.find((item) => item.id === currentOwnershipId);
  const currentOwnershipParentId = currentOwnership?.parent_id;
  const availableTaxSystemsIds = useMemo(() => formsToSystems
    .filter((item) => (
      item.form_ownership_id === currentOwnershipParentId
        ? currentOwnershipParentId
        : currentOwnershipId))
    .map((item) => item.tax_system_id), [currentOwnershipId]);

  const availableTaxSystems = useMemo(() => taxSystems
    .filter((item) => availableTaxSystemsIds.includes(item.id)), [currentOwnershipId]);

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
              {tabType}
            </OrgTab>
          ))}
        </ul>
        <div className={cls.inputs}>
          {currentTab === OrganisationTabs.others
            ? (
              <OthersInputs
                currentTab={currentTab}
                currentTaxSystemId={currentTaxSystemId}
                setCurrentTaxSystemId={setCurrentTaxSystemId}
                availableTaxSystems={availableTaxSystems}
                currentOwnershipId={currentOwnershipId}
                setCurrentOwnershipId={setCurrentOwnershipId}
              />
            )
            : (
              <DefaultInputs
                currentTab={currentTab}
              />
            )}
        </div>
        <button type="submit" className={cls.button}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditModal;
