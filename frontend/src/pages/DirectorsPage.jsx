import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DirectorsPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [emp, setEmp] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchDirector = async (name) => {
    const searchText = name?.trim();

    if (!searchText) {
      setEmp(null);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/api/employees");

      const found = res.data.find((e) =>
        e.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setEmp(found || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    searchDirector(query);
  };

  return (
    <div>
      <h1>Director Page</h1>

      {/* SEARCH ONLY */}
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);

          if (e.target.value === "") {
            setEmp(null);
          }
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search director..."
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {/* SHOW ONLY AFTER SEARCH */}
      {emp && (
        <div>
          <h2>{emp.name}</h2>

          <table>
            <tbody>
              {emp.careerHistory?.map((c, i) => (
                <tr key={i}>
                  <td
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        `/company?name=${encodeURIComponent(c.company)}`
                      )
                    }
                  >
                    {c.company}
                  </td>
                  <td>{c.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DirectorsPage;