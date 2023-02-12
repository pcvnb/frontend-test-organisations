import React from 'react';
import { Subtypes } from '@helpers/types';
import FieldsetItem from '@components/FieldsetItem/FieldsetItem';
import cls from './SubtypesFieldset.module.css';

interface IProps {
  currentSubtype: Subtypes
  setCurrentSubtype: React.Dispatch<React.SetStateAction<Subtypes>>
}

function SubtypesFieldset({ currentSubtype, setCurrentSubtype }: IProps) {
  return (
    <fieldset className={cls.fieldset}>
      {Object.values(Subtypes)
        .filter((subtype) => subtype !== Subtypes.none)
        .map((subtype) => (
          <FieldsetItem
            key={subtype}
            subtype={subtype}
            currentSubtype={currentSubtype}
            setCurrentSubtype={setCurrentSubtype}
          />
        ))}
    </fieldset>
  );
}

export default SubtypesFieldset;
