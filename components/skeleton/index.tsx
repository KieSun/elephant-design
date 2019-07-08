import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import { Width } from '../utils/types'
import { formatSize } from '../utils/style'
import './index.less'

interface SkeletonProps {
  animation?: boolean
  avatar?: boolean | AvatarObject
  loading?: boolean
  paragraph?: boolean | ParagraphObject
  title?: boolean | TitleObject
  children?: React.ReactChildren
}
interface AvatarObject {
  size?: Width
  shape?: 'circle' | 'square'
}
interface TitleObject {
  width?: Width
}
interface ParagraphObject {
  rows?: number
  width?: Width | Width[]
}
type AvatarModifier = 'circle'

const wrapperClass = bem('skeleton')
const DEFAULT_ROWS = 3

const getAvatarClass = ({ avatar }: Pick<SkeletonProps, 'avatar'>) => {
  const m: AvatarModifier[] = []
  const isCircle = !avatar || avatar === true || avatar.shape !== 'square'
  if (isCircle) {
    m.push('circle')
  }
  return m
}

const renderAside = ({ avatar = true }: Pick<SkeletonProps, 'avatar'>) => {
  if (avatar) {
    const avatarStyle: React.CSSProperties = {}
    if (typeof avatar === 'object' && avatar.size) {
      avatarStyle.width = formatSize(avatar.size)
      avatarStyle.height = formatSize(avatar.size)
    }
    return (
      <div className={classNames(wrapperClass('aside'))} style={avatarStyle}>
        <div
          className={classNames([
            wrapperClass('avatar', getAvatarClass({ avatar }))
          ])}
          style={avatarStyle}
        />
      </div>
    )
  }
  return null
}

const renderParagraph = ({
  paragraph = true
}: Pick<SkeletonProps, 'paragraph'>) => {
  const genRowStyles = (length: number, width?: Width | Width[]) => {
    return Array.from<void, React.CSSProperties>({ length }, (_, index) => {
      if (width === undefined) {
        return {}
      }
      if (Array.isArray(width)) {
        return {
          width: formatSize(width[index])
        }
      }
      return {
        width: index === length - 1 ? formatSize(width) : undefined
      }
    })
  }

  let length: number
  let rowStyles: React.CSSProperties[] = []
  if (typeof paragraph === 'boolean') {
    length = paragraph ? DEFAULT_ROWS : 0
  } else {
    const { rows = DEFAULT_ROWS, width } = paragraph
    length = rows
    rowStyles = genRowStyles(length, width)
  }

  return (
    <div className={classNames(wrapperClass('paragraph'))}>
      {Array.from({ length }, (_, index) => (
        <div key={index} style={rowStyles[index]} />
      ))}
    </div>
  )
}

const renderTitle = ({ title = true }: Pick<SkeletonProps, 'title'>) => {
  const titleStyle: React.CSSProperties = {}
  if (typeof title !== 'boolean' && title.width) {
    titleStyle.width = formatSize(title.width)
  }

  return title ? (
    <div className={classNames(wrapperClass('title'))} style={titleStyle} />
  ) : null
}

const renderContent = ({
  paragraph,
  title
}: Pick<SkeletonProps, 'paragraph' | 'title'>) => {
  return (
    <div className={classNames(wrapperClass('content'))}>
      {renderTitle({ title })}
      {renderParagraph({ paragraph })}
    </div>
  )
}

const Skeleton = (props: SkeletonProps) => {
  const { avatar, title, paragraph, loading = true, animation = true } = props

  if (loading) {
    return (
      <section
        className={classNames(
          wrapperClass([animation ? 'animation' : undefined])
        )}
      >
        {renderAside({ avatar })}
        {renderContent({ paragraph, title })}
      </section>
    )
  }
  return props.children
}

export default Skeleton
