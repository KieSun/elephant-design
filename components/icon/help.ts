import * as React from 'react'
import { Width } from '../utils/types'
import { bem } from '../utils'
import { formatSize } from '../utils/style'

export function outputIconProps(props: Props) {
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
  return {
    onClick,
    iconStyle
  }
}

export interface Props {
  size?: Width
  color?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

export const wrapperClass = bem('icon')
