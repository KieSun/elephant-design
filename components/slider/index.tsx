import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface SliderProps {
  value: number
  min: number
  max: number
  vertical: boolean
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

function limitNumber(number: number, min: number, max: number) {
  return Math.min(Math.max(number, min), max)
}

const Slider = ({ value = 0, min = 0, max = 100, vertical }: SliderProps) => {
  const [touchState, setTouchState] = React.useState({} as TouchData)
  const bar = React.useRef<HTMLDivElement>(null)
  const [diffState, setDiffState] = React.useState(0)

  function handleTouchStart(e: touchEvent) {
    const touch = e.touches[0]
    setTouchState({
      startX: touch.clientX,
      startY: touch.clientY,
      startValue: diffState
    })
  }

  function handleTouchMove(e: touchEvent) {
    if (bar && bar.current) {
      const rect = bar.current.getBoundingClientRect()
      const { width } = rect
      const { startX, startY, startValue } = touchState
      const touch = e.touches[0]
      const offsetX = touch.clientX - startX
      const offsetY = touch.clientY - startY
      let diff = offsetX / width
      diff = startValue + diff
      setDiffState(limitNumber(diff, 0, 1))
      setTouchState({
        ...touchState,
        offsetX,
        offsetY
      })
    }
  }

  function handleTouchEnd(e: touchEvent) {
    console.log(touchState, e)
  }

  return (
    <div className={classNames(wrapperClass())} ref={bar}>
      <div
        className={classNames(wrapperClass('bar'))}
        style={{ width: `${diffState * 100}%` }}
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
