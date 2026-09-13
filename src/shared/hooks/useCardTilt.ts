import { useEffect, useRef, type PointerEvent } from 'react'

const MOTION_QUERY =
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

const TILT_PROPERTIES = [
  '--tilt-x',
  '--tilt-y',
  '--light-x',
  '--light-y',
  '--shift-x',
  '--shift-y',
] as const

export function useCardTilt() {
  const frame = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    },
    [],
  )

  function resetTilt(event: PointerEvent<HTMLElement>) {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = null
    event.currentTarget.removeAttribute('data-tilting')
    for (const property of TILT_PROPERTIES) {
      event.currentTarget.style.removeProperty(property)
    }
  }

  function moveTilt(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || !window.matchMedia(MOTION_QUERY).matches) {
      return
    }

    // Measure the stationary wrapper, not the rotating surface, to avoid jitter.
    const surface = event.currentTarget
    const bounds = surface.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width))
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))

    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      surface.dataset.tilting = 'true'
      surface.style.setProperty('--tilt-x', `${(0.5 - y) * 10}deg`)
      surface.style.setProperty('--tilt-y', `${(x - 0.5) * 12}deg`)
      surface.style.setProperty('--light-x', `${x * 100}%`)
      surface.style.setProperty('--light-y', `${y * 100}%`)
      surface.style.setProperty('--shift-x', `${(x - 0.5) * 12}px`)
      surface.style.setProperty('--shift-y', `${(y - 0.5) * 10}px`)
      frame.current = null
    })
  }

  return {
    onPointerMove: moveTilt,
    onPointerLeave: resetTilt,
    onPointerCancel: resetTilt,
  }
}
