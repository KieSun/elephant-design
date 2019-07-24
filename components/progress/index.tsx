import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface ProgressProps {
  percentage?: number
  showText?: boolean
  color?: string
  textColor?: string
  textStyle?: object
  text?: string
  style?: object
  children?: React.ReactChildren
}

const wrapperClass = (name: string) => classNames(bem('progress')(name))
const Progress = (props: ProgressProps) => {
  const {
    showText = true,
    percentage,
    text = '',
    style = {},
    color,
    textColor,
    children
  } = props
  let { textStyle = {} } = props
  const percentageValue = `${percentage}%`
  const percentStyle = {
    width: percentageValue,
    background: color
  }
  textStyle = {
    color: textColor,
    ...textStyle
  }
  return (
    <div className={wrapperClass('')} style={{ ...style }}>
      <div className={wrapperClass('percent')} style={{ ...percentStyle }}>
        {showText && (
          <span className={wrapperClass('text')} style={{ ...textStyle }}>
            {text || percentageValue}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}

export default Progress
