import React from 'react';
import cls from './FormInputs.module.css';
import TaxSystemSelect from '../TaxSystemSelect/TaxSystemSelect';
import FormInfo from '../FormInfo/FormInfo';

function FormInputs() {
  return (
    <div className={cls.inputs}>
      <TaxSystemSelect />
      <FormInfo />
    </div>
  );
}

export default FormInputs;
