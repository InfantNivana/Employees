import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      fontFamily: "Inter, system-ui, -apple-system, sans-serif", 
      background: "#f8fafc", 
      minHeight: "calc(100vh - 70px)", 
      paddingBottom: "80px",
      color: "#1e293b"
    }}>
      {/* HERO BANNER SECTION WITH BACKGROUND IMAGE */}
      <div style={{
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(30, 41, 59, 0.8) 70%, rgba(255, 255, 255, 0.1) 100%), url('image_11a2bb.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        color: "#ffffff",
        padding: "120px 24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "left"
        }}>
          <span style={{
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontSize: "0.85rem",
            fontWeight: "700",
            color: "#38bdf8",
            display: "inline-block",
            marginBottom: "12px"
          }}>
            Enterprise Intelligence Platform
          </span>
          <h1 style={{ 
            fontSize: "3.5rem", 
            margin: "0 0 20px 0", 
            fontWeight: "800",
            lineHeight: "1.15",
            letterSpacing: "-0.025em",
            maxWidth: "750px"
          }}>
            Corporate Profile & <br />
            <span style={{ color: "#38bdf8" }}>Information Portal</span>
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#cbd5e1", 
            maxWidth: "640px", 
            margin: "0",
            lineHeight: "1.7",
            fontWeight: "400"
          }}>
            Instantly verify registration information, explore corporate metadata structures, track active current directors, and map cross-organizational employment history paths.
          </p>
        </div>
      </div>

      {/* CORE FUNCTIONALITY SELECTION TILES */}
      <div style={{
        maxWidth: "1100px",
        margin: "-50px auto 0 auto",
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "32px",
        position: "relative",
        zIndex: "10"
      }}>
        
        {/* Company Card Component Option */}
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <div>
            <div style={{ 
              background: "#eff6ff", 
              width: "60px", 
              height: "60px", 
              borderRadius: "14px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: "1.75rem", 
              marginBottom: "24px" 
            }}>
              🏢
            </div>
            <h2 style={{ color: "#0f172a", margin: "0 0 12px 0", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-0.01em" }}>
              Company Registry Search
            </h2>
            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.6", margin: "0 0 32px 0" }}>
              Look up corporate files by name or unique Identification Numbers (<strong>CIN</strong>). View structural profiles, industries, descriptions, and current leadership matrices.
            </p>
          </div>
          <button 
            onClick={() => navigate("/company")}
            style={{
              background: "#0284c7",
              color: "#ffffff",
              border: "none",
              padding: "14px 28px",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(2, 132, 199, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background 0.2s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#0369a1"}
            onMouseOut={(e) => e.currentTarget.style.background = "#0284c7"}
          >
            Open Company Registry <span>&rarr;</span>
          </button>
        </div>

        {/* Director Card Component Option */}
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <div>
            <div style={{ 
              background: "#faf5ff", 
              width: "60px", 
              height: "60px", 
              borderRadius: "14px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: "1.75rem", 
              marginBottom: "24px" 
            }}>
              👤
            </div>
            <h2 style={{ color: "#0f172a", margin: "0 0 12px 0", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-0.01em" }}>
              Director Profiles Search
            </h2>
            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.6", margin: "0 0 32px 0" }}>
              Search profiles by Director Identification Numbers (<strong>DIN</strong>) or plain-text names. Inspect official contact records and active corporate career histories.
            </p>
          </div>
          <button 
            onClick={() => navigate("/director/search")}
            style={{
              background: "#6b21a8",
              color: "#ffffff",
              border: "none",
              padding: "14px 28px",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(107, 33, 168, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background 0.2s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#581c87"}
            onMouseOut={(e) => e.currentTarget.style.background = "#6b21a8"}
          >
            Open Director Search <span>&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;