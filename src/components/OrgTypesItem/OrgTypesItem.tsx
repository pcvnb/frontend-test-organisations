import cls from './OrgTypesItem.module.css';

interface IProps {
  children: string;
}

function OrgTypesItem({ children }: IProps) {
  return (
    <li className={cls.item}>{children}</li>
  );
}

export default OrgTypesItem;
