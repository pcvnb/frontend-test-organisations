import React, { useMemo, useState } from 'react';
import { ModalType } from '@helpers/types';
import Title from '@components/Title/Title';
import useModal from '@helpers/lib/useModal';
import OrganisationsList from '@components/OrganisationsList/OrganisationsList';
import { useOrgsStore } from '@zustand/store';
import Modal from '@components/Modal/Modal';
import useFetchData from '@zustand/useFetchData';
import cls from './MainPage.module.css';

function MainPage() {
  const { isDataLoading } = useFetchData();
  const { orgs } = useOrgsStore();
  const { isOpen, open: openModal, close } = useModal();
  const [modalType, setModalType] = useState(ModalType.none);
  const [currentOrgId, setCurrentOrgId] = useState<number>(-1);

  const currentOrg = useMemo(() => {
    if (currentOrgId === -1) {
      return null;
    }
    return orgs.find((org) => (org.company_id === currentOrgId));
  }, [currentOrgId, orgs]);

  if (isDataLoading) {
    return <div>Loading...</div>;
  }

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
        <Modal
          isOpen={isOpen}
          modalType={modalType}
          setModalType={setModalType}
          currentOrg={currentOrg}
          close={close}
        />
        )}
      </div>
    </div>
  );
}

export default MainPage;
