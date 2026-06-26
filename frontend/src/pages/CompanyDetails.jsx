import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanyDetails() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔵 SEARCH ONLY WHEN USER ACTIONS
  const searchCompany = async (name) => {
    const searchText = name?.trim();

    if (!searchText) {
      setSelectedCompany(null);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      const employees = Array.isArray(res.data) ? res.data : [];

      let companyData = {
        name: searchText,
        description: "",
        cin: "N/A",
        registerNo: "N/A",
        category: "N/A",
        activeEmployees: [],
      };

      employees.forEach((emp) => {
        const company = emp.companyDetails;

        if (
          company?.companyName &&
          company.companyName.toLowerCase().includes(searchText.toLowerCase())
        ) {
          companyData.name = company.companyName;
          companyData.description =
            company.description || "No description available";
          companyData.cin = company.cin || "N/A";
          companyData.registerNo = company.registerNo || "N/A";
          companyData.category = company.industry || "N/A";
        }

        emp.careerHistory?.forEach((career) => {
          if (
            career.company &&
            career.company.toLowerCase().includes(searchText.toLowerCase())
          ) {
            if (
              career.status?.toLowerCase() === "active" ||
              career.status?.toLowerCase() === "present"
            ) {
              companyData.activeEmployees.push({
                id: emp._id,
                name: emp.name,
                din: emp.DIN,
                designation: career.role,
                appointmentDate: career.joiningDate,
              });
            }
          }
        });
      });

      setSelectedCompany(companyData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔵 HANDLE SEARCH BUTTON / ENTER
  const handleSearch = () => {
    searchCompany(query);
  };

  return (
    <div>
      <h1>Company Page</h1>

      {/* SEARCH BAR ONLY */}
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);

          // 🔥 CLEAR DATA WHEN USER CLEARS INPUT
          if (e.target.value === "") {
            setSelectedCompany(null);
          }
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search company..."
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {/* SHOW ONLY AFTER SEARCH */}
      {selectedCompany && (
        <div>
          <h2>{selectedCompany.name}</h2>

          <table>
            <tbody>
              {selectedCompany.activeEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/director/${emp.id}`)
                    }
                  >
                    {emp.name}
                  </td>
                  <td>{emp.din}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompanyDetails;