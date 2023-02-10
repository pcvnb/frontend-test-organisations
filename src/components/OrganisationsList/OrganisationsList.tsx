import React from 'react';
import OrganisationsItem from '../OrganisationsItem/OrganisationsItem';
import cls from './OrganisationsList.module.css';
import { ModalType } from '../../helpers/types';
import { useOrgsStore } from '../../zustand/store';

interface IProps {
  openModal: () => void
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
  setCurrentOrgId: React.Dispatch<React.SetStateAction<number>>
}

function OrganisationsList({
  openModal, setModalType, setCurrentOrgId,
}: IProps) {
  const { orgs } = useOrgsStore();
  return (
    <ul className={cls.list}>
      {orgs.map((organisation) => (
        <OrganisationsItem
          organisation={organisation}
          key={organisation.company_id}
          openModal={openModal}
          setModalType={setModalType}
          setCurrentOrgId={setCurrentOrgId}
        />
      ))}
    </ul>
  );
}

export default OrganisationsList;
