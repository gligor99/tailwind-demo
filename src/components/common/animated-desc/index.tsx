import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface ItemsProps {
  desc: string
  type: string
  icon: JSX.Element
}

const items: ItemsProps[] = [
  {
    desc: 'Introduce awesome features',
    type: 'Long Term',
    icon: <InformationCircleIcon className="h-6 w-6" />,
  },
  {
    desc: 'Start new marketing campaign',
    type: 'Short Term',
    icon: <InformationCircleIcon className="h-6 w-6" />,
  },
  {
    desc: 'Update help documents',
    type: 'Urgent',
    icon: <InformationCircleIcon className="h-6 w-6" />,
  },
]

export const AnimatedDesc = () => {
  return (
    <div className="mt-40 mb-20 flex max-w-full items-center justify-center gap-16 px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 h-72 w-72  animate-blob rounded-full bg-purple-300 opacity-60 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-60 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute left-20 -bottom-8 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-60 mix-blend-multiply blur-xl filter"></div>
        {items.map((d) => {
          return (
            <div
              role={'list'}
              key={d.desc}
              className="opacity-1 relative m-8 space-y-4"
            >
              <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
                <div className="flex-column ">
                  <p className=" text-lg font-semibold text-slate-500">
                    {d.desc}
                  </p>
                </div>
                <div>
                  <div className="flex h-6 items-center justify-center rounded-lg bg-purple-300 px-4">
                    <p className="text-xs font-semibold text-white">{d.type}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="relative w-full max-w-lg">
        <div>
          <div className="mb-6 text-4xl font-semibold text-slate-900">
            Set & prioritize your goals.
          </div>
          <p className="pr-20 text-xl leading-7 text-slate-400">
            Turn your project management into a source of information instead of
            a list of frustration. Communicate the timeframe & impact of your
            goals and democratize your roadmap.
          </p>
        </div>
      </div>
    </div>
  )
}
