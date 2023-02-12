import classNames from 'classnames';
import React from 'react';
import { OrganisationTabs } from '@helpers/types';
import cls from './OrgTab.module.css';

interface IProps {
  children: string;
  tabType: OrganisationTabs;
  currentTab: OrganisationTabs;
  setCurrentTab: React.Dispatch<React.SetStateAction<OrganisationTabs>>;
}

function OrgTab({
  children,
  tabType,
  setCurrentTab,
  currentTab,
}: IProps) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setCurrentTab(target.value as OrganisationTabs);
  };

  return (
    <li
      className={classNames(cls.item, { [cls.active]: currentTab === tabType })}
    >
      <button
        className={cls.button}
        type="button"
        onClick={onClick}
        value={tabType}
      >
        {children}
      </button>
    </li>
  );
}

export default OrgTab;
