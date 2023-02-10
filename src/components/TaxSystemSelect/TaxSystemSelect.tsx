import React from 'react';
import cls from './TaxSystemSelect.module.css';
import { TaxSystem } from '../../helpers/types';

interface IProps {
  currentTaxSystemId: number,
  setCurrentTaxSystemId: React.Dispatch<React.SetStateAction<number>>,
  availableTaxSystems: TaxSystem[]
}

function TaxSystemSelect({
  currentTaxSystemId,
  setCurrentTaxSystemId,
  availableTaxSystems,
}: IProps) {
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    setCurrentTaxSystemId(id);
  };

  return (
    <label className={cls.label} htmlFor="tax-select">
      Выберите систему налогообложения
      <select
        className={cls.select}
        id="tax-select"
        name="tax-select"
        onChange={onSelect}
        value={currentTaxSystemId}
      >
        {availableTaxSystems?.map((item) => (
          <option value={item.id} key={item.id}>{item.full}</option>
        ))}
      </select>
    </label>
  );
}

export default TaxSystemSelect;
