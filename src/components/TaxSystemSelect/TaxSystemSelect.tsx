import cls from './TaxSystemSelect.module.css';

function TaxSystemSelect() {
  return (
    <label className={cls.label} htmlFor="tax-select">
      Выберите систему налогообложения
      <select className={cls.select} id="taxSelect" name="tax-select">
        <option>Упрощенная система налогообложения</option>
        <option>Упрощенная система налогообложения</option>
        <option>Упрощенная система налогообложения</option>
      </select>
    </label>
  );
}

export default TaxSystemSelect;
