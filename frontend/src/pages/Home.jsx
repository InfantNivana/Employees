import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>

      {/* COMPANY PAGE */}
      <button
        onClick={() => navigate("/company")}
        style={{ padding: "10px 20px", margin: "10px" }}
      >
        Company Details
      </button>

      {/* DIRECTORS PAGE (sample/demo) */}
      <button
        onClick={() => navigate("/directors/ABC Pvt Ltd")}
        style={{ padding: "10px 20px", margin: "10px" }}
      >
        Directors Page
      </button>
    </div>
  );
}

export default Home;