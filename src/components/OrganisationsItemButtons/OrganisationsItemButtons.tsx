import React from 'react';
import cls from './OrganisationsItemButtons.module.css';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';
import { ModalType, Organisation } from '../../helpers/types';

interface IProps {
  organisation: Organisation,
  openModal: () => void,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>
  setCurrentOrgId: React.Dispatch<React.SetStateAction<number>>
}

function OrganisationsItemButtons({
  organisation, openModal, setModalType, setCurrentOrgId,
}: IProps) {
  const onEdit = () => {
    setModalType(ModalType.edit);
    setCurrentOrgId(organisation.company_id);
    openModal();
  };

  const onDelete = () => {
    setModalType(ModalType.delete);
    setCurrentOrgId(organisation.company_id);
    openModal();
  };

  return (
    <div className={cls.icons}>
      <button type="button" className={cls.button} onClick={onEdit}>
        <img className={cls.icon} alt="edit organisation icon" src={EditIcon} />
      </button>
      <button type="button" className={cls.button} onClick={onDelete}>
        <img className={cls.icon} alt="delete organisation icon" src={DeleteIcon} />
      </button>
    </div>
  );
}

export default OrganisationsItemButtons;
