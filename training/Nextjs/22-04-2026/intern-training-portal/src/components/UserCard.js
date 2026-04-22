export default function UserCard({ name, role }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}