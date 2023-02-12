import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import DeleteModal from '@components/DeleteModal/DeleteModal';
import { ModalType } from '@helpers/types';
import Title from '@components/Title/Title';
import EditModal from '@components/EditModal/EditModal';
import useModal from '@helpers/lib/useModal';
import OrganisationsList from '@components/OrganisationsList/OrganisationsList';
import {
  useFormToSystemsStore, useOrgsStore, useOwnershipsStore, useTaxSystemsStore,
} from '@zustand/store';
import useKeyEffect from '@helpers/lib/useKeyEffect';
import cls from './MainPage.module.css';

function MainPage() {
  const { fetchData: fetchOrgs, isLoading: areOrgsLoading, orgs } = useOrgsStore();
  const { fetchData: fetchOwnerships, isLoading: areOwnershipsLoading } = useOwnershipsStore();
  const { fetchData: fetchTaxSystems, isLoading: areTaxSystemsLoading } = useTaxSystemsStore();
  const {
    fetchData: fetchFormToSystems,
    isLoading: areFormToSystemsLoading,
  } = useFormToSystemsStore();
  const { isOpen, open: openModal, close } = useModal();
  const [modalType, setModalType] = useState(ModalType.none);
  const [currentOrgId, setCurrentOrgId] = useState<number>(-1);

  const currentOrg = useMemo(() => {
    if (currentOrgId === -1) {
      return null;
    }
    return orgs
      .find((org) => (org.company_id === currentOrgId));
  }, [currentOrgId, orgs]);

  useEffect(() => {
    fetchOrgs();
    fetchOwnerships();
    fetchTaxSystems();
    fetchFormToSystems();
  }, [fetchFormToSystems, fetchOrgs, fetchOwnerships, fetchTaxSystems]);

  useEffect(() => {
    if (!isOpen) {
      setModalType(ModalType.none);
    }
  }, [isOpen]);
  useKeyEffect('Escape', close);

  if (areOrgsLoading || areOwnershipsLoading || areTaxSystemsLoading || areFormToSystemsLoading) {
    return <div>Loading...</div>;
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { classList } = e.target as HTMLDivElement;
    if ([...classList].includes(cls.overlay)) {
      close();
    }
  };

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <Title className={cls.title}>Мои организации</Title>
        <OrganisationsList
          openModal={openModal}
          setModalType={setModalType}
          setCurrentOrgId={setCurrentOrgId}
        />
        {isOpen && currentOrg && (
        <div
          className={classNames(cls.overlay, { [cls.showOverlay]: isOpen })}
          role="dialog"
          onClick={onOverlayClick}
        >
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
