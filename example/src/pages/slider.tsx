import React from 'react'
import { Slider } from '../../../dist/index.es'

export default () => (
  <div>
    <Slider
      value={50}
      min={40}
      max={80}
      step={4}
      onChange={(value: number) => {
        console.log(value)
      }}
    />
  </div>
)
