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

const RightArrow = (props: Props) => {
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
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
    </svg>
  )
}

export default RightArrow
