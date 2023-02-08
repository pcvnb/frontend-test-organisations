import cls from './BlockTitle.module.css'

interface IProps {
    children: string
}

const BlockTitle = ({children}: IProps) => {
    return (
        <h2 className={cls.title}>{children}</h2>
    );
};

export default BlockTitle;
