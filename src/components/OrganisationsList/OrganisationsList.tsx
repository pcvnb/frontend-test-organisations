import React from 'react';
import OrganisationsItem from '../OrganisationsItem/OrganisationsItem';
import cls from './OrganisationsList.module.css';
import { ModalType, Organisation } from '../../helpers/types';

interface IProps {
  organisations: Organisation[],
  toggle: () => void
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
  setCurrentData: React.Dispatch<React.SetStateAction<Organisation | null>>
}

function OrganisationsList({
  organisations, toggle, setModalType, setCurrentData,
}: IProps) {
  return (
    <ul className={cls.list}>
      {organisations.map((organisation) => (
        <OrganisationsItem
          organisation={organisation}
          key={organisation.company_id}
          toggle={toggle}
          setModalType={setModalType}
          setCurrentData={setCurrentData}
        />
      ))}
    </ul>
  );
}

export default OrganisationsList;
