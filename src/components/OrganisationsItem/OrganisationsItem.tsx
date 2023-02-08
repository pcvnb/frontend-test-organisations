import React from 'react';
import cls from './OrganisationsItem.module.css';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';
import EmptyJpg from '../../assets/emptyLogo.jpg';
import { Organisation } from '../../types';

interface IProps {
  org: Organisation
}

function OrganisationsItem({ org }: IProps) {
  return (

    <li className={cls.card}>
      <img className={cls.logo} alt="organisation logo" src={org.logo ? org.logo : EmptyJpg} />
      <div className={cls.info}>
        {`ТОО ${org.company_name}`}
        <span>{`ИИН/БИН ${org.company_tin}`}</span>
      </div>
      <div className={cls.icons}>
        <img alt="edit organisation icon" src={EditIcon} />
        <img alt="delete organisation icon" src={DeleteIcon} />
      </div>
    </li>
  );
}

export default OrganisationsItem;
