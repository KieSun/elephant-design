import * as React from 'react'
import classNames from 'classnames'

import { bem } from '../utils'
import './index.less'

interface BadgeProps {
  size?: 'large' | 'small'
  corner?: boolean
  count?: number
  showZero?: boolean
  overflowCount?: number
  color?: string
  text?: any
  dot?: boolean
  style?: React.CSSProperties
}

const wrapperClass = bem('badge')

const Badge: React.FC<BadgeProps> = props => {
  const { count = 0, overflowCount = 99, text, dot, showZero, children } = props
  const countString = count > overflowCount ? `${overflowCount}+` : `${count}`
  // dot mode don't need text or countString, text take precedence over countString
  const renderText = dot ? '' : text || countString

  return (
    <span className={classNames(wrapperClass())}>
      {children}
      {
        <sup className={classNames(wrapperClass(dot ? 'dot' : 'text'))}>
          {renderText}
        </sup>
      }
    </span>
  )
}

export default Badge
