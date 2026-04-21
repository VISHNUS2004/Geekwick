type Props = {
  title: string;
  duration: string;
  level: string;
};

export default function CourseCard({ title, duration, level }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Level:</strong> {level}</p>
    </div>
  );
}