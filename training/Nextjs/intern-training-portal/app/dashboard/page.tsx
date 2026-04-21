import Card from "../../components/Card";

export default function Dashboard(){
  return (
    <div className="card">
      <h1>Dashboard</h1>
      <Card title="Total Interns" value="50" />
      <Card title="Total Trainers" value="10" />
      <Card title="Total Tasks" value="25" />
    </div>
  );
}