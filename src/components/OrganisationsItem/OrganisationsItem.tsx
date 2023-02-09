import React from 'react';
import cls from './OrganisationsItem.module.css';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';
import EmptyLogo from '../../assets/emptyLogo.jpg';
import { Organisation } from '../../types';

interface IProps {
  organisation: Organisation,
  toggle: () => void
}

function OrganisationsItem({ organisation, toggle }: IProps) {
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
      <div className={cls.icons}>
        <button type="button" onClick={toggle}>
          <img alt="edit organisation icon" src={EditIcon} />
        </button>
        <img alt="delete organisation icon" src={DeleteIcon} />
      </div>
    </li>
  );
}

export default OrganisationsItem;
