import classNames from 'classnames';
import React, { useRef } from 'react';
import { OrganisationTabs } from '@helpers/types';
import useFocusEffect from '@helpers/lib/useFocusEffect';
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setCurrentTab(target.value as OrganisationTabs);
  };

  useFocusEffect({
    ref: buttonRef,
    condition: tabType === OrganisationTabs.too,
  });

  return (
    <li
      className={classNames(cls.item, { [cls.active]: currentTab === tabType })}
    >
      <button
        className={cls.button}
        type="button"
        onClick={onClick}
        value={tabType}
        ref={buttonRef}
      >
        {children}
      </button>
    </li>
  );
}

export default OrgTab;
