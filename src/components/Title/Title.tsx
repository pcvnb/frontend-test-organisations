import classNames from 'classnames';
import cls from './Title.module.css';

interface IProps {
  children: string,
  className?: string
}

function Title({ children, className }: IProps) {
  return (
    <h2 className={classNames(cls.title, className)}>{children}</h2>
  );
}

export default Title;
