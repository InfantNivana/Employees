import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/api/employees/director/${id}`
        );

        setEmployee(res.data || null);
      } catch (err) {
        console.error("API ERROR:", err);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  if (!employee) {
    return <p style={{ padding: "20px" }}>No Director Found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Director Profile</h2>

      <p><b>Name:</b> {employee?.name}</p>
      <p><b>DIN:</b> {employee?.DIN}</p>
      <p><b>Email:</b> {employee?.email}</p>
      <p><b>Phone:</b> {employee?.phone}</p>
      <p><b>Designation:</b> {employee?.currentDesignation}</p>

      <h3>Career History</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Joining</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employee?.careerHistory?.length > 0 ? (
            employee.careerHistory.map((c, i) => (
              <tr key={i}>
                <td>{c?.company || "N/A"}</td>
                <td>{c?.role || "N/A"}</td>
                <td>{c?.joiningDate || "N/A"}</td>
                <td>{c?.status || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Career History Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;