import React from 'react'

export default function RibbonBannerPage() {
  return (
    <div className=" min-h-screen  bg-blue-500 p-8">
      <div className="relative mx-auto h-56 w-80 rounded-xl bg-white shadow-xl">
        <div className="absolute -top-2 -right-2 aspect-square w-32 overflow-hidden rounded-sm">
          <div className="absolute top-0 left-0 aspect-square w-2 bg-amber-500"></div>
          <div className="absolute bottom-0 right-0 aspect-square w-2 bg-amber-500"></div>
          <a
            href="#"
            className="w-square-diagonal absolute bottom-0 right-0 block origin-bottom-right rotate-45 bg-amber-400 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm transition-all duration-200 hover:bg-yellow-300"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}
