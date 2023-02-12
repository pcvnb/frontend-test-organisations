import React from 'react';
import { Subtypes } from '@helpers/types';
import { ownerships } from '@helpers/mock';
import cls from './OwnershipSelect.module.css';

interface IProps {
  currentSubtype: Subtypes;
  currentOwnershipId: number;
  setCurrentOwnershipId: React.Dispatch<React.SetStateAction<number>>;
}

function OwnershipSelect({
  currentSubtype,
  currentOwnershipId,
  setCurrentOwnershipId,
}: IProps) {
  const filteredOwnerships = ownerships
    .filter((item) => item.account_type === currentSubtype);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    setCurrentOwnershipId(id);
  };

  return (
    <label className={cls.label} htmlFor="own-select">
      Выберите форму собственности
      <select
        id="own-select"
        className={cls.select}
        name="own-select"
        value={currentOwnershipId}
        onChange={onSelect}
      >
        {filteredOwnerships.map((item) => (
          <option value={item.id} key={item.id}>
            {item.full}
          </option>
        ))}
      </select>
    </label>
  );
}

export default OwnershipSelect;
