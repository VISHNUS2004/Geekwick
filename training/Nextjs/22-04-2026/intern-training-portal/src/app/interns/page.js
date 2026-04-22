"use client";
import { useEffect, useState } from "react";

export default function InternsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/interns")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Interns</h1>

      {data.map((i) => (
        <div className="card" key={i.id}>
          {i.name}
        </div>
      ))}
    </div>
  );
}