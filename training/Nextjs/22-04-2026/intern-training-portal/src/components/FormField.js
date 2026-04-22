export default function FormField({ label, name, value, onChange, error }) {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}