import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [linkHover, setLinkHover] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseenter', onMouseEnter)
      document.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, input, textarea, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHover(true))
        el.addEventListener('mouseleave', () => setLinkHover(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-50' : 'scale-100'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHover ? 'hover' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}

export default CustomCursor