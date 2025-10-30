import React from "react";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
    <ThemeProvider>
      {/* <StudentDashboard /> */}
      <AdminDashboard />
    </ThemeProvider>
  );
}

export default App;
