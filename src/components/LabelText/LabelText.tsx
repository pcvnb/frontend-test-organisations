import React from 'react';
import cls from './LabelText.module.css';

interface IProps {
  children: React.ReactNode;
  htmlFor?: string;
}

function LabelText({ children, htmlFor = '' }: IProps) {
  return (
    <label htmlFor={htmlFor} className={cls.label}>{children}</label>
  );
}

export default LabelText;
