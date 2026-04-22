export async function GET() {
  const courses = [
    { id: 1, name: "React", level: "Beginner" },
    { id: 2, name: "Node.js", level: "Intermediate" },
    { id: 3, name: "MongoDB", level: "Advanced" },
    { id: 4, name: "Next.js", level: "Intermediate" },
  ];

  return Response.json(courses);
}