import cls from './OwnershipSelect.module.css';

function OwnershipSelect() {
  return (
    <label className={cls.label} htmlFor="own-select">
      Выберите форму собственности
      <select id="own-select" className={cls.select} name="own-select">
        <option value="qwe">qwe</option>
        <option value="">qwe</option>
        <option value="">qwe</option>
      </select>
    </label>
  );
}

export default OwnershipSelect;
