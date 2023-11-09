const Dropdown = ({
  select,
  options,
  label,
  value,
  setValue,
  cdropdownDiv,
  cdropdownLabel,
  cdropdownInput,
}) => {
  return (
    <div className={cdropdownDiv}>
      <label className={cdropdownLabel}>{label}</label>
      <select className={cdropdownInput} onChange={(e) => setValue(e, value)}>
        <option>{select}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
