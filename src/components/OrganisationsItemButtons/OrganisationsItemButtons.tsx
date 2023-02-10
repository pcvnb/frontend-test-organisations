import React from 'react';
import cls from './OrganisationsItemButtons.module.css';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';
import { ModalType, Organisation } from '../../helpers/types';

interface IProps {
  organisation: Organisation,
  toggle: () => void,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
  setCurrentOrgId: React.Dispatch<React.SetStateAction<number>>
}

function OrganisationsItemButtons({
  organisation, toggle, setModalType, setCurrentOrgId,
}: IProps) {
  const onEdit = () => {
    setModalType(ModalType.edit);
    setCurrentOrgId(organisation.company_id);
    toggle();
  };

  const onDelete = () => {
    setModalType(ModalType.delete);
    toggle();
  };

  return (
    <div className={cls.icons}>
      <button type="button" className={cls.button} onClick={onEdit}>
        <img alt="edit organisation icon" src={EditIcon} />
      </button>
      <button type="button" className={cls.button} onClick={onDelete}>
        <img alt="delete organisation icon" src={DeleteIcon} />
      </button>
    </div>
  );
}

export default OrganisationsItemButtons;
