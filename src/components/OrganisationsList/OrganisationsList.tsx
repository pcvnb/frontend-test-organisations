import React from 'react';
import OrganisationsItem from '../OrganisationsItem/OrganisationsItem';
import cls from './OrganisationsList.module.css';
import { Organisation } from '../../types';

interface IProps {
  organisations: Organisation[],
  toggle: () => void
}

function OrganisationsList({ organisations, toggle }: IProps) {
  return (
    <ul className={cls.list}>
      {organisations.map((organisation) => (
        <OrganisationsItem
          organisation={organisation}
          key={organisation.company_id}
          toggle={toggle}
        />
      ))}
    </ul>
  );
}

export default OrganisationsList;
