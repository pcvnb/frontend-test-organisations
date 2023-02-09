import cls from './TaxSystemSelect.module.css';
import LabelText from '../LabelText/LabelText';

function TaxSystemSelect() {
  return (
    <LabelText>
      Выберите систему налогообложения
      <select className={cls.select}>
        <option>Упрощенная система налогообложения</option>
        <option>Упрощенная система налогообложения</option>
        <option>Упрощенная система налогообложения</option>
      </select>
    </LabelText>
  );
}

export default TaxSystemSelect;
