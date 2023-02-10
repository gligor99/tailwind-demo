import React from 'react'
import { HorizontalGallery } from './h-gallery'

export default function GsapDemoPage() {
  return (
    <div className="overflow-hidden">
      <div className="  flex h-screen w-screen items-center justify-center  bg-slate-500 text-7xl text-white">
        <p className="animate-bounce">Scroll down</p>
      </div>
      <HorizontalGallery />
      <div className=" flex h-screen w-screen items-center justify-center bg-slate-500 text-7xl text-white">
        <p className="animate-bounce font-bold uppercase">The end</p>
      </div>{' '}
    </div>
  )
}
