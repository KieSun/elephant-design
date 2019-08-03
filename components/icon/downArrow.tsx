import React from 'react'
import classNames from 'classnames'
import { formatSize } from '../utils/style'
import { Width } from '../utils/types'
import { bem } from '../utils'
import './index.less'

const wrapperClass = bem('icon')

interface Props {
  size?: Width
  color?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

const DownArrow = (props: Props) => {
  const { size, color, style, onClick } = props
  let iconStyle: React.CSSProperties = {}
  const newSize = size ? formatSize(size) : '2rem'
  iconStyle.width = newSize
  iconStyle.height = newSize
  if (color) {
    iconStyle.color = color
  }
  if (style) {
    iconStyle = Object.assign(iconStyle, style)
  }
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      style={iconStyle}
      className={classNames(wrapperClass())}
      onClick={onClick}
    >
      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
    </svg>
  )
}

export default DownArrow
