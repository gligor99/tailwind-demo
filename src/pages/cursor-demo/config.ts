import useMouse from '@react-hook/mouse-position'

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY
  }

  return {
    default: {
      opacity: 1,
      height: 18,
      width: 18,
      fontSize: '20px',
      backgroundColor: '#fff',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
      border: '3px solid black',
    },
    black: {
      opacity: 1,
      backgroundColor: '#000',
      color: '#000',
      height: 124,
      width: 124,
      fontSize: '32px',
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    white: {
      opacity: 1,
      backgroundColor: '#fff',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
      border: '8px solid black',
    },
  }
}

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
}
