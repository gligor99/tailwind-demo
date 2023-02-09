import React, { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxTextProps {
  children: string
  baseVelocity: number
}

const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxTextProps) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(-1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-tight tracking-tight">
      <motion.div
        className="flex flex-nowrap text-6xl font-semibold uppercase"
        style={{ x }}
      >
        {[1, 2, 3, 4].map((t) => {
          return (
            <span key={t} className="mr-8 text-white">
              {children}
            </span>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function ParallaxTextPage() {
  return (
    <section className="scroll-smooth bg-slate-700 pt-[85vh] pb-[85vh]">
      <ParallaxText baseVelocity={-5}>What is Lorem Ipsum?</ParallaxText>
      <ParallaxText baseVelocity={2}>
        Lorem Ipsum is simply dummy text.
      </ParallaxText>
    </section>
  )
}
