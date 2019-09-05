import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface SliderProps {
  value: number
  min: number
  max: number
  step: number
  vertical: boolean
  disabled?: boolean
  dragStart?: () => void
  dragEnd?: () => void
  onChange: (value: number) => void
}

interface TouchData {
  startX: number
  startY: number
  offsetX?: number
  offsetY?: number
  startValue: number
}

const wrapperClass = bem('slider')

type touchEvent = React.TouchEvent<HTMLDivElement>

const Slider = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  vertical,
  dragEnd,
  dragStart,
  onChange,
  disabled = false
}: SliderProps) => {
  function limitNumber(number: number) {
    return Math.round(Math.min(Math.max(number, min), max) / step) * step
  }

  const [touchState, setTouchState] = React.useState({} as TouchData)
  const bar = React.useRef<HTMLDivElement>(null)
  const [diffState, setDiffState] = React.useState(limitNumber(value))

  function handleTouchStart(e: touchEvent) {
    if (disabled) return
    if (dragStart) dragStart()
    const touch = e.touches[0]
    setTouchState({
      startX: touch.clientX,
      startY: touch.clientY,
      startValue: diffState
    })
  }

  function handleTouchMove(e: touchEvent) {
    if (disabled) return
    if (bar && bar.current) {
      const rect = bar.current.getBoundingClientRect()
      const { width } = rect
      const { startX, startY, startValue } = touchState
      const touch = e.touches[0]
      const offsetX = touch.clientX - startX
      const offsetY = touch.clientY - startY
      const diff = (offsetX / width) * (max - min) + startValue
      const val = limitNumber(diff)
      if (onChange) onChange(val)
      setDiffState(val)
      setTouchState({
        ...touchState,
        offsetX,
        offsetY
      })
    }
  }

  function handleTouchEnd() {
    if (disabled) return
    if (dragEnd) dragEnd()
  }

  return (
    <div
      className={classNames(wrapperClass('', disabled ? 'disabled' : ''))}
      ref={bar}
    >
      <div
        className={classNames(wrapperClass('bar'))}
        style={{ width: `${((diffState - min) / (max - min)) * 100}%` }}
      >
        <div
          className={classNames(wrapperClass('button-wrapper'))}
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={classNames(wrapperClass('button'))} />
        </div>
      </div>
    </div>
  )
}

export default Slider
