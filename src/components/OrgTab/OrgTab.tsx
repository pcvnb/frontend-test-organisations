import classNames from 'classnames';
import React from 'react';
import cls from './OrgTab.module.css';
import { OrganisationTabs } from '../../helpers/types';

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
