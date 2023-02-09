import cls from './Title.module.css';

interface IProps {
  children: string
}

function Title({ children }: IProps) {
  return (
    <h2 className={cls.title}>{children}</h2>
  );
}

export default Title;
