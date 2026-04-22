"use client";
import { useState } from "react";

export default function FormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="course" placeholder="Course" onChange={handleChange} />

        <button
          onClick={() => setSubmitted(true)}
          disabled={!form.name || !form.email}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="card">
          <h3>Submitted Data</h3>
          <p>{form.name}</p>
          <p>{form.email}</p>
          <p>{form.course}</p>
        </div>
      )}
    </div>
  );
}