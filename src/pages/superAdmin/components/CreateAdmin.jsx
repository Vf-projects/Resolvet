import React from 'react'
import { useTheme } from "../../../context/ThemeContext";

const CreateAdmin = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='p-2 bg-[#f0eeee]'>

      <h1 className='mt-100'>
        Admin
      </h1>

    </div>
  )
}

export default CreateAdmin