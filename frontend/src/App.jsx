// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import CompanyDetails from "./pages/CompanyDetails";
// import DirectorsPage from "./pages/DirectorsPage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       {/* SAFE ROUTE */}
//       <Route path="/company" element={<CompanyDetails />} />

//       {/* PARAM ROUTE */}
//       <Route path="/company/:companyName" element={<CompanyDetails />} />

//       <Route path="/director/:id" element={<DirectorsPage />} />
//     </Routes>
//   );
// }

// export default App;

























import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CompanyDetails from "./pages/CompanyDetails";
import DirectorsPage from "./pages/DirectorsPage";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* COMPANY PAGE (ONLY QUERY BASED) */}
      <Route path="/company" element={<CompanyDetails />} />

      {/* DIRECTOR PAGE */}
      <Route path="/director/:id" element={<DirectorsPage />} />
    </Routes>
  );
}

export default App;