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
}

const wrapperClass = bem('slider')

type touchEvent = React.TouchEvent<HTMLDivElement>

const Slider = ({ value = 0, min = 0, max = 100, vertical }: SliderProps) => {
  const [touchState, setTouchState] = React.useState({} as TouchData)

  function handleTouchStart(e: touchEvent) {
    const touch = e.touches[0]
    setTouchState({
      startX: touch.clientX,
      startY: touch.clientY
    })
  }

  function handleTouchMove(e: touchEvent) {
    const touch = e.touches[0]
    setTouchState({
      ...touchState,
      offsetX: touch.clientX - touchState.startX,
      offsetY: touch.clientY - touchState.startY
    })
  }

  function handleTouchEnd(e: touchEvent) {
    console.log(touchState, e)
  }

  return (
    <div className={classNames(wrapperClass())}>
      <div className={classNames(wrapperClass('bar'))}>
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
