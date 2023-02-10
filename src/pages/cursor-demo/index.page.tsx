import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { spring, useVariants } from './config'

export default function CursorDemoPage() {
  const ref = useRef(null)

  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')

  const variants = useVariants(ref)

  function buyEnter() {
    setCursorText('')
    setCursorVariant('black')
  }

  function buyLeave() {
    setCursorText('')
    setCursorVariant('default')
  }

  function sellEnter() {
    setCursorText('')
    setCursorVariant('white')
  }

  function sellLeave() {
    setCursorText('')
    setCursorVariant('default')
  }

  return (
    <>
      <div>
        <div
          ref={ref}
          className="flex h-screen w-screen flex-row items-center justify-center gap-16"
        >
          <motion.div
            variants={variants}
            className="pointer-events-none  fixed top-0 left-0 z-50 flex h-3
            w-3 flex-row items-center justify-center rounded-full bg-slate-700 text-center text-base text-white"
            animate={cursorVariant}
            transition={spring}
          >
            <span className="pointer-events-none m-auto flex-auto text-inherit">
              {cursorText}
            </span>
          </motion.div>
          <div>
            <span
              onMouseEnter={buyEnter}
              onMouseLeave={buyLeave}
              className="text-2xl font-medium leading-5 underline"
            >
              Want to be black?
            </span>
          </div>
          <div>
            <span
              className="text-2xl font-medium leading-5 underline"
              onMouseEnter={sellEnter}
              onMouseLeave={sellLeave}
            >
              Want to be white?
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
