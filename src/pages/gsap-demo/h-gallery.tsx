import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HorizontalGallery = () => {
  const scrollerRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set')

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scrollerRef.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    })

    return () => {
      to.kill()
    }
  }, [])

  return (
    <div className="flex overflow-hidden">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scrollerRef}
          className=" relative m-0 flex h-screen w-[400vw] overflow-x-hidden bg-slate-300 text-white"
        >
          {[1, 2, 3, 4].map((t) => {
            return (
              <section
                key={t}
                ref={skillsRef}
                className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
              >
                <Image
                  src="https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="2ndimage"
                  layout="fill"
                  objectFit="contain"
                  className="m-auto max-h-[60vh] max-w-[70vw]"
                />
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
