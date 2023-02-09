import React from 'react'
import { motion, Variants } from 'framer-motion'

interface CardProps {
  emoji: string
  hueA: number
  hueB: number
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const cardItems: [string, number, number][] = [
  ['🎮', 340, 10],
  ['🎮', 20, 40],
  ['🎮', 60, 90],
  ['🎮', 340, 10],
  ['🎮', 60, 90],
  ['🎮', 20, 40],
]

const Card = ({ emoji, hueA, hueB }: CardProps) => {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="relative -mb-[120px] flex items-center justify-center overflow-hidden pt-5"
    >
      <div
        className="clip-path-for-card absolute bottom-0 left-0 right-0 top-0"
        style={{ background }}
      />
      <motion.div
        variants={cardVariants}
        style={{ transformOrigin: `10% 60%` }}
        className="flex h-[430px] w-[300px] items-center justify-center rounded-3xl bg-white text-[164px] shadow-sm shadow-slate-500"
      >
        {emoji}
      </motion.div>
    </motion.div>
  )
}

export default function CardRevealPage() {
  return cardItems.map(([emoji, hueA, hueB], i) => {
    return (
      <section className="h-full w-full flex-1 bg-slate-100 pt-10">
        <div className=" mx-auto max-w-lg">
          <Card key={i} emoji={emoji} hueA={hueA} hueB={hueB} />
        </div>
      </section>
    )
  })
}
