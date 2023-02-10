import { useState } from 'react';
import classNames from 'classnames';
import cls from './SubtypesFieldset.module.css';
import { Subtypes } from '../../helpers/types';

function SubtypesFieldset() {
  const [currentSubtype, setCurrentSubtype] = useState(Subtypes.legalEntities);

  const onRadio = (e: any) => {
    setCurrentSubtype(e.target.value);
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
