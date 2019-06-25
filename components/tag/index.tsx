import * as React from 'react'
import classNames from 'classnames'
import './index.less'
import { bem } from '../utils'

// enum TagColors {
//   PINK = 'pink',
//   RED = 'red',
//   YELLOW = 'yellow',
//   ORANGE = 'orange',
//   CYAN = 'cyan',
//   GREEN = 'green',
//   BLUE = 'blue',
//   PURPLE = 'purple',
//   MAGENTA = 'magenta',
//   VOLCANO = 'volcano',
//   GOLD = 'gold',
//   LIME = 'lime'
// }
type TagColors =
  | ''
  | 'pink'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'cyan'
  | 'green'
  | 'blue'
  | 'purple'
  | 'magenta'
  | 'volcano'
  | 'gold'
  | 'lime'
const tagColors: TagColors[] = [
  '',
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'volcano',
  'gold',
  'lime'
]
type TagSize = 'small' | 'medium' | 'large'
interface TagProps {
  onClick: React.ReactEventHandler
  children?: React.ReactChildren
  size?: TagSize
  color?: TagColors
  round?: boolean
}
type TagClasses = {
  [Size in TagSize]?: boolean
} &
  {
    [Color in TagColors]?: boolean
  } & {
    round?: boolean
  }

const KEY_CODE_ENTER = 13
const KEY_CODE_SPACEBAR = 32

const wrapper = bem('tag')

const isPresetColor = (color: TagColors) => {
  return tagColors.includes(color.toLowerCase() as TagColors)
}

const getTagClass = (props: TagProps) => {
  const { size = 'medium', round = false, color = '' } = props
  const classes: TagClasses = {
    round,
    [color.toLocaleLowerCase()]: isPresetColor(color),
    [size]: true
  }

  return classes
}

const Tag = (props: TagProps) => {
  const { onClick, children } = props
  const onKeyDown = (e: React.KeyboardEvent) => {
    const isConfirm = [KEY_CODE_ENTER, KEY_CODE_SPACEBAR].includes(e.keyCode)
    if (isConfirm && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={onClick}
      className={classNames([wrapper(getTagClass(props))])}
    >
      {children || null}
    </div>
  )
}

export default Tag
