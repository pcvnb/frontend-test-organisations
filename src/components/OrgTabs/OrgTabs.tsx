import React from 'react';
import cls from './OrgTabs.module.css';
import { OrganisationTabs } from '../../helpers/types';
import OrgTab from '../OrgTab/OrgTab';
import { orgToText } from '../../helpers/constants';

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
