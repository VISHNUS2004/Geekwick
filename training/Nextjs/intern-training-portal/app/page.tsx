import Image from "next/image";

export default function Home() {
  return (
      <main className="container">
      <h1>Intern Training Portal</h1>

      <Image
        src="/image.jpeg"
        width={250}
        height={250}
        alt="training"
        style={{ borderRadius: "10px", marginTop: "20px" }}
      />
    </main>
  );
}