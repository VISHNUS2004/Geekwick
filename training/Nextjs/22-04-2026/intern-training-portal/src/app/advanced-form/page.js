"use client";
import { useState } from "react";
import FormField from "@/components/FormField";

export default function AdvancedFormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    skills: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      department: "",
      skills: "",
    });
    setSubmitted(false);
  };

  const errors = {
    name: !form.name && "Name required",
    email: !form.email && "Email required",
    phone: !form.phone && "Phone required",
  };

  return (
    <div>
      <h1>Advanced Form</h1>

      <FormField label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
      <FormField label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
      <FormField label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
      <FormField label="Department" name="department" value={form.department} onChange={handleChange} />
      <FormField label="Skills" name="skills" value={form.skills} onChange={handleChange} />

      <button onClick={() => setSubmitted(true)}>Submit</button>
      <button onClick={resetForm} style={{ marginLeft: "10px", background: "gray" }}>
        Reset
      </button>

      {submitted && (
        <div className="card">
          <h3>Preview</h3>
          <p>{form.name}</p>
          <p>{form.email}</p>
          <p>{form.phone}</p>
          <p>{form.department}</p>
          <p>{form.skills}</p>
        </div>
      )}
    </div>
  );
}