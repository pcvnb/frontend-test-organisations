import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import OrganisationsList from '../OrganisationsList/OrganisationsList';
import cls from './MainPage.module.css';
import Title from '../Title/Title';
import EditModal from '../EditModal/EditModal';
import useModal from '../../helpers/lib/useModal';
import { organisations } from '../../helpers/mock';
import DeleteModal from '../DeleteModal/DeleteModal';
import { ModalType } from '../../helpers/types';

function MainPage() {
  const { isOpen, toggle, close } = useModal();
  const [modalType, setModalType] = useState(ModalType.none);

  useEffect(() => {
    if (!isOpen) {
      setModalType(ModalType.none);
    }
  }, []);
  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <Title>Мои организации</Title>
        <OrganisationsList
          organisations={organisations}
          toggle={toggle}
          setModalType={setModalType}
        />
        {isOpen && (
          <div className={classNames(cls.overlay, { [cls.showOverlay]: isOpen })}>
            {modalType === ModalType.edit && <EditModal />}
            {modalType === ModalType.delete && <DeleteModal closeModal={close} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
