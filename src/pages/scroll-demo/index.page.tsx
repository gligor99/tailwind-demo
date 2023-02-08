import { motion, useScroll, useSpring } from 'framer-motion'
import { LoremIpsum } from './lorem-ipsum'

export default function ScrollDemoPage() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="mx-auto max-w-3xl scroll-smooth ">
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 origin-left transform bg-pink-500"
        style={{ scaleX }}
      />
      <h1 className="mt-24 mb-10 text-center text-4xl font-bold leading-9 tracking-tighter">
        <span className="relative mr-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
          <span className="relative text-white">useScroll</span>
        </span>
        with spring smoothing
      </h1>

      <LoremIpsum />
    </div>
  )
}
