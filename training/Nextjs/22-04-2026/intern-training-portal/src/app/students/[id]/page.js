import Link from "next/link";

export default function StudentDetail({ params }) {
  return (
    <div>
      <h2>Student ID: {params.id}</h2>
      <Link href="/students">Back</Link>
    </div>
  );
}