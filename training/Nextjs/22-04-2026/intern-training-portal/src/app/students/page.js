import Link from "next/link";

const students = [
  { id: 1, name: "Kaushik" },
  { id: 2, name: "Rahul" },
];

export default function StudentsPage() {
  return (
    <div>
      <h1>Students</h1>

      {students.map((s) => (
        <div key={s.id}>
          <Link href={`/students/${s.id}`}>{s.name}</Link>
        </div>
      ))}
    </div>
  );
}