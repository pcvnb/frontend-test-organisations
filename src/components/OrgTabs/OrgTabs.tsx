import React from 'react';
import { OrganisationTabs } from '@helpers/types';
import OrgTab from '@components/OrgTab/OrgTab';
import { orgToText } from '@helpers/constants';
import cls from './OrgTabs.module.css';

interface IProps {
  currentTab: OrganisationTabs,
  setCurrentTab: React.Dispatch<React.SetStateAction<OrganisationTabs>>
}

function OrgTabs({ currentTab, setCurrentTab }: IProps) {
  return (
    <ul className={cls.orgTabs}>
      {Object.values(OrganisationTabs).map((tabType) => (
        <OrgTab
          currentTab={currentTab}
          tabType={tabType}
          setCurrentTab={setCurrentTab}
          key={tabType}
        >
          {orgToText.get(tabType) as string}
        </OrgTab>
      ))}
    </ul>
  );
}

export default OrgTabs;
