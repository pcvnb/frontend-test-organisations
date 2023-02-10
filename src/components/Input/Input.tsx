import cls from './Input.module.css';

interface IProps {
  type?: string,
  value: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

function Input({
  type = 'text',
  value,
  disabled = false,
  name,
  id,
}: IProps) {
  return (
    <input
      type={type}
      value={value}
      className={cls.default}
      disabled={disabled}
      name={name}
      id={id}
    />
  );
}

export default Input;
