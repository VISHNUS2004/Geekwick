export async function GET() {
  return Response.json([
    { id: 1, name: "Kaushik" },
    { id: 2, name: "Rahul" },
  ]);
}