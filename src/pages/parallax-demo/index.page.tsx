import {
  useScroll,
  motion,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'
import { useRef } from 'react'

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Image = ({ id }: { id: number }) => {
  const ref = useRef<any>(null)
  const { scrollYProgress: progress } = useScroll({ target: ref })
  const y = useParallax(progress, 300)

  return (
    <div className="relative flex h-screen snap-center snap-always items-center justify-center ">
      <div
        ref={ref}
        className="relative m-5 h-96 max-h-[90vh] w-80 overflow-hidden bg-white"
      >
        <img
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full "
          src={`/${id}.jpeg`}
          alt={id.toString()}
        />
      </div>
      <motion.h2
        style={{ y, left: `calc(50% + 130px)` }}
        className="absolute m-0 text-6xl font-bold leading-tight tracking-tight text-slate-700"
      >{`#00${id}`}</motion.h2>
    </div>
  )
}

export default function ParallaxDemoPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div>
      {[1, 2, 3, 4].map((d) => {
        return <Image key={d} id={d} />
      })}
      <motion.div
        className="fixed left-0 right-0 bottom-24 h-1 snap-center bg-slate-500"
        style={{ scaleX }}
      />
    </div>
  )
}
