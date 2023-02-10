import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import OrganisationsList from '../OrganisationsList/OrganisationsList';
import cls from './MainPage.module.css';
import Title from '../Title/Title';
import EditModal from '../EditModal/EditModal';
import useModal from '../../helpers/lib/useModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import { ModalType } from '../../helpers/types';
import {
  useFormToSystemsStore, useOrgsStore, useOwnershipsStore, useTaxSystemsStore,
} from '../../zustand/store';

function MainPage() {
  const { fetchData: fetchOrgs, isLoading: areOrgsLoading, orgs } = useOrgsStore();
  const { fetchData: fetchOwnerships, isLoading: areOwnershipsLoading } = useOwnershipsStore();
  const { fetchData: fetchTaxSystems, isLoading: areTaxSystemsLoading } = useTaxSystemsStore();
  const {
    fetchData: fetchFormToSystems,
    isLoading: areFormToSystemsLoading,
  } = useFormToSystemsStore();
  const { isOpen, toggle, close } = useModal();
  const [modalType, setModalType] = useState(ModalType.none);
  const [currentOrgId, setCurrentOrgId] = useState<number>(-1);

  const currentOrg = useMemo(() => {
    if (currentOrgId === -1) {
      return null;
    }
    return orgs
      .find((org) => (org.company_id === currentOrgId));
  }, [currentOrgId]);

  useEffect(() => {
    if (!isOpen) {
      setModalType(ModalType.none);
    }

    fetchOrgs();
    fetchOwnerships();
    fetchTaxSystems();
    fetchFormToSystems();
  }, []);

  if (areOrgsLoading || areOwnershipsLoading || areTaxSystemsLoading || areFormToSystemsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <Title className={cls.title}>Мои организации</Title>
        <OrganisationsList
          toggle={toggle}
          setModalType={setModalType}
          setCurrentOrgId={setCurrentOrgId}
        />
        {isOpen && currentOrg && (
          <div className={classNames(cls.overlay, { [cls.showOverlay]: isOpen })}>
            {modalType === ModalType.edit
                    && <EditModal currentOrg={currentOrg} close={close} />}
            {modalType === ModalType.delete
                    && <DeleteModal closeModal={close} currentOrg={currentOrg} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
