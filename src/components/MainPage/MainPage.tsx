import React from 'react';
import classNames from 'classnames';
import OrganisationsList from '../OrganisationsList/OrganisationsList';
import cls from './MainPage.module.css';
import Title from '../Title/Title';
import EditModal from '../EditModal/EditModal';
import useModal from '../useModal';
import { organisations } from '../../mock';

function MainPage() {
  const { isOpen, toggle } = useModal();

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <Title>Мои организации</Title>
        <OrganisationsList organisations={organisations} toggle={toggle} />
        <div className={classNames(cls.overlay, { [cls.showOverlay]: isOpen })}>
          <EditModal isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
