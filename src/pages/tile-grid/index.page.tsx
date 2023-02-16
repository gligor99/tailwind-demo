import React from 'react'

export default function TileGridPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid max-w-5xl gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        <h1 className=" text-4xl font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4 md:col-span-3 md:grid-cols-3 md:text-5xl">
          <span className="md:col-span-2">Grid Layout</span>
        </h1>
        <p className="sm:col-start-2 sm:row-start-2 sm:self-center md:col-span-2 md:col-start-1 md:pr-12 md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quae maiores soluta accusantium tempora consequatur labore fugit.
        </p>
        <div className="h-16 bg-blue-500 sm:aspect-square sm:h-auto"></div>
        <div className="h-16 bg-purple-500 sm:aspect-square sm:h-auto"></div>
        <div className="h-16 bg-pink-500 sm:aspect-square sm:h-auto"></div>
        <div className="h-16 bg-blue-500 sm:aspect-square sm:h-auto md:col-start-2"></div>
        <div className="h-16 bg-sky-500 sm:aspect-square sm:h-auto "></div>
        <div className="h-16 bg-purple-500 sm:aspect-square sm:h-auto"></div>
        <div className="h-16 bg-blue-500 sm:aspect-square sm:h-auto"></div>
        <div className="h-16 bg-pink-500 sm:aspect-square sm:h-auto"></div>
        <p className="self-center md:col-span-2 md:px-4 md:text-center md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quae maiores.
        </p>
      </div>
    </div>
  )
}
