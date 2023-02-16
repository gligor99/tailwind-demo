import { useState } from 'react'
import {
  FiArrowRight,
  FiCalendar,
  FiFile,
  FiMessageCircle,
  FiMonitor,
  FiPieChart,
  FiSearch,
  FiSettings,
  FiUser,
  FiYoutube,
} from 'react-icons/fi'

const Menus = [
  { title: 'Dashboard', icon: <FiMonitor /> },
  { title: 'Inbox', icon: <FiMessageCircle /> },
  { title: 'Accounts', gap: true, icon: <FiUser /> },
  { title: 'Schedule ', icon: <FiCalendar /> },
  { title: 'Search', icon: <FiSearch /> },
  { title: 'Analytics', icon: <FiPieChart /> },
  { title: 'Files ', gap: true, icon: <FiFile /> },
  { title: 'Settings', icon: <FiSettings /> },
]

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-20 '
        } relative h-screen bg-dark-purple  p-5 pt-8 duration-300`}
      >
        <div
          className={`absolute -right-3 top-9 flex aspect-square w-7 cursor-pointer items-center
          justify-center rounded-full border-2 border-dark-purple bg-white  ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        >
          <FiArrowRight />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center">
            <FiYoutube
              className={`h-10 w-10 cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
              color="white"
            />
          </div>
          <h1
            className={`origin-left text-xl font-medium text-white duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Sidebar
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((m, i) => (
            <li
              key={i}
              className={`flex cursor-pointer items-center gap-x-4 rounded-md  text-sm text-gray-300 hover:bg-light-white 
          ${m.gap ? 'mt-9' : 'mt-2'} ${i === 0 && 'bg-light-white'} ${
                !open && 'justify-start'
              } `}
            >
              <div className="flex aspect-square h-10 items-center justify-center">
                {m.icon}
              </div>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {m.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  )
}
