import React from 'react';
import OrganisationsItem from '../OrganisationsItem/OrganisationsItem';
import cls from './OrganisationsList.module.css';
import { ModalType, Organisation } from '../../helpers/types';

interface IProps {
  organisations: Organisation[],
  toggle: () => void
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
}

function OrganisationsList({ organisations, toggle, setModalType }: IProps) {
  return (
    <ul className={cls.list}>
      {organisations.map((organisation) => (
        <OrganisationsItem
          organisation={organisation}
          key={organisation.company_id}
          toggle={toggle}
          setModalType={setModalType}
        />
      ))}
    </ul>
  );
}

export default OrganisationsList;
