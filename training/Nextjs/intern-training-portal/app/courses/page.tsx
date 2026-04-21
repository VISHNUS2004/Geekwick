"use client";

import { useState } from "react";
import CourseCard from "../../components/CourseCard";

export default function Courses(){
  const [search, setSearch] = useState<string>("");

  const courses = [
    { title: "React", duration: "4 weeks", level: "Beginner" },
    { title: "Next.js", duration: "3 weeks", level: "Intermediate" },
    { title: "MongoDB", duration: "2 weeks", level: "Beginner" },
  ];

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Courses</h1>

    <input
      placeholder="Search course"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
        borderRadius: "5px",
        border: "1px solid gray"
      }}
    />

      {filtered.length === 0 ? (
        <p>No courses found</p>
      ) : (
        filtered.map((c, i) => <CourseCard key={i} {...c} />)
      )}
    </div>
  );
}