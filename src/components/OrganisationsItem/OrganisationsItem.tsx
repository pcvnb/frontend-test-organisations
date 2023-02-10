import React from 'react';
import cls from './OrganisationsItem.module.css';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';
import EmptyLogo from '../../assets/emptyLogo.jpg';
import { ModalType, Organisation } from '../../helpers/types';

interface IProps {
  organisation: Organisation,
  toggle: () => void,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>

}

function OrganisationsItem({ organisation, toggle, setModalType }: IProps) {
  const onEdit = () => {
    setModalType(ModalType.edit);
    toggle();
  };

  const onDelete = () => {
    setModalType(ModalType.delete);
    toggle();
  };

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
        <button type="button" className={cls.button} onClick={onEdit}>
          <img alt="edit organisation icon" src={EditIcon} />
        </button>
        <button type="button" className={cls.button} onClick={onDelete}>
          <img alt="delete organisation icon" src={DeleteIcon} />
        </button>

      </div>
    </li>
  );
}

export default OrganisationsItem;
