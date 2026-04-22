const courses = [
  { id: 1, name: "React", level: "Beginner" },
  { id: 2, name: "Node", level: "Advanced" },
];

export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.id == params.id);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.level}</p>
    </div>
  );
}