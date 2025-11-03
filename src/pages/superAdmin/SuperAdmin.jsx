import React, { useState, useEffect } from 'react'
import Panel from './components/Panel'
import {FaBars, FaTimes, FaSun, FaMoon} from 'react-icons/fa'
import Logout from './components/Logout'
import CreateAdmin from './components/CreateAdmin'
import CreateSchool from './components/CreateSchool'
import CreateSuperAdmin from './components/CreateSuperAdmin'
import { useTheme } from "../../context/ThemeContext";

const SuperAdmin = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("panel");
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Dashboard", page: "panel" },
    { name: "Create School", page: "school" },
    { name: "Create Admin", page: "admin" },
    { name: "Create Super Admin", page: "superadmin" },
    { name: "Report", page: "report" },
    { name: "Chat Monitoring", page: "chatmonitoring" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <div className={`relative ${theme === "dark" ? "text-white" : "text-gray-700"}`}>

        <div className={`fixed z-50 w-full flex flex-row justify-between items-center shadow-xl
        ${theme === "dark" ? "bg-[#1E1E24]" : "bg-white"}`}>
          <button
            onClick={() => setOpen(!open)}
            className="mb-6 font-bold text-3xl mt-4 ml-4"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <div className="text-3xl font-bold -mt-3 mr-3 flex flex-row items-center">
            Resolvet
            <div onClick={toggleTheme} className='ml-4 text-2xl mt-1'>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
          </div>

        </div>

        <div className='flex flex-col justify-between'>
          <nav className={`top-0 left-0 gap-4 shadow-xl transition-all duration-500 pb-4 flex flex-col
          ease-in-out pl-4 pr-4 pt-25 justify-between h-screen w-74
          ${open ? 'translate-x-0 block fixed' : '-translate-x-full absolute'}
          ${theme === "dark" ? "bg-[#1E1E24]" : "bg-white"}`}
          >
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setActivePage(item.page)
                }}
                className={`text-left text-2xl font-medium p-2 rounded
                  ${theme === 'dark' ? 'hover:bg-[#25262B]' : "hover:bg-gray-200"}`}
              >
                {item.name}
              </button>
            ))}

            <Logout />
          </nav>

          {activePage === "panel" && <Panel />}
          {activePage === "school" && <CreateSchool />}
          {activePage === "admin" && <CreateAdmin />}
          {activePage === "superadmin" && <CreateSuperAdmin />}
        </div>

      </div>
    </>
  )
}

export default SuperAdmin