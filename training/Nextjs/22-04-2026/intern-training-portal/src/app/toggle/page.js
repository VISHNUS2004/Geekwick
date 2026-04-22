"use client";
import { useState } from "react";

export default function TogglePage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>This is visible</p>}
    </div>
  );
}