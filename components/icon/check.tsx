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

const Check = (props: Props) => {
  const { size, color, style, onClick } = props
  let iconStyle: React.CSSProperties = {}
  const newSize = size ? formatSize(size) : '2rem'
  iconStyle.width = newSize
  iconStyle.height = newSize
  if (color) {
    iconStyle.color = color
  }
  if (style) {
    iconStyle = style
  }
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      style={iconStyle}
      className={classNames(wrapperClass())}
      onClick={onClick}
    >
      <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z" />
    </svg>
  )
}

export default Check
