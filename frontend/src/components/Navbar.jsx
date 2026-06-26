import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  /* ================= LOAD ALL EMPLOYEES ================= */
  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employees");
        setEmployees(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Navbar load error:", err);
      }
    };

    load();
  }, []);

  /* ================= SEARCH LOGIC ================= */
  useEffect(() => {
  const text = query.trim().toLowerCase();

  if (!text) return; // ✅ only stop logic, no setState

  const delay = setTimeout(() => {
    const results = [];

    employees.forEach((emp) => {
      const company = emp.companyDetails?.companyName;

      if (company && company.toLowerCase().includes(text)) {
        results.push({
          type: "company",
          name: company,
        });
      }

      if (emp.name && emp.name.toLowerCase().includes(text)) {
        results.push({
          type: "director",
          name: emp.name,
          id: emp._id,
        });
      }
    });

    setSuggestions(results.slice(0, 6));
  }, 300);

  return () => clearTimeout(delay);
}, [query, employees]);

  /* ================= SELECT ================= */
  const handleSelect = (item) => {
    setQuery("");
    setSuggestions([]);

    if (item.type === "company") {
      navigate("/company", { state: { company: item.name } });
    } else {
      navigate(`/employee/${item.id}`);
    }
  };

  /* ================= ENTER KEY ================= */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Employee System</h2>

      {/* LINKS */}
      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/company" style={styles.link}>Company</NavLink>
        <NavLink to="/directors" style={styles.link}>Directors</NavLink>
      </div>

      {/* SEARCH */}
      <div style={styles.searchWrapper}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search company or director..."
          style={styles.input}
        />

        {/* DROPDOWN */}
        {suggestions.length > 0 && (
          <div style={styles.dropdown}>
            {suggestions.map((item, i) => (
              <div
                key={i}
                style={styles.dropdownItem}
                onClick={() => handleSelect(item)}
              >
                {item.type === "company"
                  ? `🏢 ${item.name}`
                  : `👤 ${item.name}`}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

/* ================= STYLES ================= */
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "white",
    position: "relative",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "20px" },
  link: { color: "white", textDecoration: "none" },

  searchWrapper: { position: "relative" },

  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    width: "220px",
  },

  dropdown: {
    position: "absolute",
    top: "40px",
    left: 0,
    background: "white",
    color: "black",
    width: "220px",
    borderRadius: "6px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    zIndex: 999,
    maxHeight: "200px",
    overflowY: "auto",
  },

  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
};

export default Navbar;