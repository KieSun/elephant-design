import React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface SliderProps {
  min: number
  max: number
  vertical: boolean
}

const wrapperClass = bem('slider')

const Slider = ({ min, max, vertical }: SliderProps) => {
  const value = 1
  return (
    <div className={classNames(wrapperClass())}>
      <div className={classNames(wrapperClass('bar'))}>
        <div
          className={classNames(wrapperClass('button-wrapper'))}
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
        >
          <div className={classNames(wrapperClass('button'))} />
        </div>
      </div>
    </div>
  )
}

export default Slider
