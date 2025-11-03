import React from 'react'
import SuperAdminDashboard from './pages/superAdmin/SuperAdmin'
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <SuperAdminDashboard />

      </ThemeProvider>
    </>
  )
}

export default App