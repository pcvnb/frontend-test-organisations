import classNames from 'classnames';
import React from 'react';
import { Subtypes } from '@helpers/types';
import { SubtypesToText } from '@helpers/constants';
import cls from './FieldsetItem.module.css';

interface IProps {
  currentSubtype: Subtypes;
  subtype: Subtypes;
  setCurrentSubtype: React.Dispatch<React.SetStateAction<Subtypes>>;
}

function FieldsetItem({ subtype, currentSubtype, setCurrentSubtype }: IProps) {
  const onRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSubtype(e.target.value as Subtypes);
  };

  return (
    <label
      className={classNames(
        cls.label,
        { [cls.active]: currentSubtype === subtype },
      )}
      htmlFor={subtype}
      key={subtype}
    >
      <input
        type="radio"
        name="subtype"
        onChange={onRadio}
        id={subtype}
        value={subtype}
        className={cls.input}
        checked={currentSubtype === subtype}
      />
      {[SubtypesToText.get(subtype)]}
    </label>
  );
}

export default FieldsetItem;
