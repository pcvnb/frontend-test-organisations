import cls from './Input.module.css';

interface IProps {
  type?: string,
  value: string;
  disabled?: boolean;
}

function Input({ type = 'text', value, disabled = false }: IProps) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <input type={type} value={value} className={cls.default} disabled={disabled} />
  );
}

export default Input;
