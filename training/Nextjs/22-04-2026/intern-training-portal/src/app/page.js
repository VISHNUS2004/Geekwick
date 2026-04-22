import UserCard from "@/components/UserCard";

export default function Home() {
  const courses = ["React", "Node", "MongoDB"];

  return (
    <div>
      <h1>Users</h1>

      <UserCard name="Kaushik" role="Frontend Intern" />
      <UserCard name="Rahul" role="Backend Intern" />
      <UserCard name="Anjali" role="Full Stack Intern" />

      <h2>Courses</h2>

      {courses.length === 0 ? (
        <p>No interns available</p>
      ) : (
        courses.map((course, index) => (
          <div className="card" key={index}>
            {course}
          </div>
        ))
      )}
    </div>
  );
}