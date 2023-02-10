import classNames from 'classnames';
import React from 'react';
import cls from './SubtypesFieldset.module.css';
import { Subtypes } from '../../helpers/types';

interface IProps {
  currentSubtype: Subtypes
  setCurrentSubtype: React.Dispatch<React.SetStateAction<Subtypes>>
}

function SubtypesFieldset({ currentSubtype, setCurrentSubtype }: IProps) {
  const onRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCurrentSubtype(target.value as Subtypes);
  };

  return (
    <fieldset className={cls.fieldset}>
      {Object.values(Subtypes).map((subtype) => (
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
            onClick={onRadio}
            id={subtype}
            value={subtype}
            className={cls.input}
            checked={currentSubtype === subtype}
          />
          {subtype}
        </label>
      ))}
    </fieldset>
  );
}

export default SubtypesFieldset;
