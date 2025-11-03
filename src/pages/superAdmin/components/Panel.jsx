import React from 'react'
  import { useTheme } from "../../../context/ThemeContext";

const Panel = () => {
  const { theme } = useTheme();

  const stats = [
    { label: "Schools", value: 10 },
    { label: "Admins", value: 5 },
    { label: "Super Admins", value: 3 },
    { label: "Users", value: 50 },
  ];

  return (
    <div className={`p-2 h-full xs:h-screen ${theme === "dark" ? 'bg-[#25262B] text-white' : 'bg-[#f0eeee] text-gray-600'}`}>

      <div className="mt-[100px] w-full h-[450px] grid grid-cols-1 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl shadow-md flex flex-col items-center justify-center text-center
              ${theme === 'dark' ? 'bg-[#2A2B32]' : 'bg-white'}`}
          >
            <p className="text-2xl font-medium">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}

        <p className='text-center text-2xl mt-5'>
          Click an option to start...
        </p>
      </div>

    </div>
  )
}

export default Panel