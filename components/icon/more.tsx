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

const More = (props: Props) => {
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
      <path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zm308 0c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" />
    </svg>
  )
}

export default More
