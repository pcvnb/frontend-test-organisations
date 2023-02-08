import React from 'react';
import OrganisationsItem from '../OrganisationsItem/OrganisationsItem';
import cls from './OrganisationsList.module.css';
import { Organisation } from '../../types';

interface IProps {
  orgs: Organisation[]
}

function OrganisationsList({ orgs }: IProps) {
  return (
    <ul className={cls.list}>
      {orgs.map((org) => <OrganisationsItem org={org} key={org.company_id} />)}
    </ul>
  );
}

export default OrganisationsList;
