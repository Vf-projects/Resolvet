import React from 'react'
import { useTheme } from "../../../context/ThemeContext";

const CreateSuperAdmin = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='p-2 bg-[#f0eeee]'>

      <h1 className='mt-100'>
        Super
      </h1>

    </div>
  )
}

export default CreateSuperAdmin