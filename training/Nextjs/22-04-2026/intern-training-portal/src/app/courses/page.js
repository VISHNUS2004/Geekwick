"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then(setCourses);
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((c) => (
        <div className="card" key={c.id}>
          <h3>{c.name}</h3>
          <p>{c.level}</p>
          <Link href={`/courses/${c.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}