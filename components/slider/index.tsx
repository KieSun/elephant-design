import React from 'react'

interface SliderProps {
  min: number
  max: number
  vertical: boolean
}

const Slider = ({ min, max, vertical }: SliderProps) => {
  const value = 1
  return (
    <div>
      <div className="bar">
        <div
          className="slider"
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
        >
          <div className="button" />
        </div>
      </div>
    </div>
  )
}

export default Slider
