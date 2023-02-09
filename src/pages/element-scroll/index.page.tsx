import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

export default function ElementScrollPage() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  return (
    <section className="h-screen w-screen flex-1 ">
      <div className=" mx-auto flex h-full items-center ">
        <svg
          className="fixed top-5 left-5 -rotate-90"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{ strokeDashoffset: 0 }}
            className="fill-none stroke-slate-100 stroke-[15%] "
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="fill-none stroke-slate-700  stroke-[15%]"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul
          ref={ref}
          className="my-0 mx-auto flex h-80 flex-shrink-0 flex-grow-0 basis-[950px] list-none overflow-x-scroll py-5 px-0"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => {
            return (
              <li
                key={t}
                className="mt-0 mb-0 ml-0 mr-5 flex-shrink-0 flex-grow-0 basis-52 rounded-3xl bg-slate-500 last:mr-0"
              ></li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
