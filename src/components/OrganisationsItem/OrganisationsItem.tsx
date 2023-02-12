import React from 'react';
import EmptyLogo from '@assets/emptyLogo.jpg';
import { ModalType, Organisation } from '@helpers/types';
import OrganisationsItemButtons from '@components/OrganisationsItemButtons/OrganisationsItemButtons';
import cls from './OrganisationsItem.module.css';

interface IProps {
  organisation: Organisation,
  openModal: () => void,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
  setCurrentOrgId: React.Dispatch<React.SetStateAction<number>>
}

function OrganisationsItem({
  organisation, openModal, setModalType, setCurrentOrgId,
}: IProps) {
  return (
    <li className={cls.card}>
      <img
        className={cls.logo}
        alt="organisation logo"
        src={organisation.logo ? organisation.logo : EmptyLogo}
      />

      <div className={cls.info}>
        {`ТОО ${organisation.company_name}`}
        <span>{`ИИН/БИН ${organisation.company_tin}`}</span>
      </div>

      <OrganisationsItemButtons
        organisation={organisation}
        openModal={openModal}
        setModalType={setModalType}
        setCurrentOrgId={setCurrentOrgId}
      />
    </li>
  );
}

export default OrganisationsItem;
