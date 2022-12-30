export function Input(props) {
  const { type, onChange, value, label, name } = props;
  return (
    <div>
      <label className="text-start w-100">{label}</label>
      <input type={type} onChange={onChange} value={value} name={name} className="w-100" />
    </div>
  );
}
