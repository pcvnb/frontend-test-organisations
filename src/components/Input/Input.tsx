import classNames from 'classnames';
import cls from './Input.module.css';

interface IProps {
  type?: string,
  value: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

function Input({
  type = 'text',
  value,
  disabled = false,
  name,
  id,
  className,
}: IProps) {
  return (
    <input
      type={type}
      value={value}
      className={classNames(cls.default, className)}
      disabled={disabled}
      name={name}
      id={id}
    />
  );
}

export default Input;
