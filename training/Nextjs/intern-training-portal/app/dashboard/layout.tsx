import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container" style={{ display: "flex", maxWidth: "1100px", margin: "auto", padding: "20px" }}>
      
     <aside className="dashboard-sidebar" style={{
        width: "200px",
        background: "#f1f5f9",
        padding: "15px",
        borderRadius: "8px"
      }}>
        <h3>Dashboard</h3>
        <Link href="/dashboard/profile">Profile</Link><br />
        <Link href="/dashboard/settings">Settings</Link>
      </aside>

       <main className="dashboard-main" style={{ flex: 1, marginLeft: "20px" }}>
        {children}
      </main>
    </div>
  );
}