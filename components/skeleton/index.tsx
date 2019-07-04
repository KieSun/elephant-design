import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

type Width = string | number
interface SkeletonProps {
  animation?: boolean
  avatar?: boolean | { shape: 'circle' | 'square' }
  loading?: boolean
  paragraph?: boolean | ParagraphObject
  title?: boolean | Width
  children?: React.ReactChildren
}
interface ParagraphObject {
  rows?: number
  width?: Width | Width[]
}
type AvatarModifier = 'circle'

const wrapperClass = bem('skeleton')
const DEFAULT_ROWS = 3

const getAvatarClass = ({ avatar }: Partial<SkeletonProps>) => {
  const m: AvatarModifier[] = []
  const isCircle = !avatar || avatar === true || avatar.shape !== 'square'
  if (isCircle) {
    m.push('circle')
  }
  return m
}

const renderAside = ({ avatar = true }: Partial<SkeletonProps>) => {
  if (avatar) {
    return (
      <div className={classNames(wrapperClass('aside'))}>
        <div
          className={classNames([
            wrapperClass('avatar', getAvatarClass({ avatar }))
          ])}
        />
      </div>
    )
  }
  return null
}

const renderParagraph = ({ paragraph = true }: Partial<SkeletonProps>) => {
  const genRowStyles = (length: number, width?: Width | Width[]) => {
    return Array.from<void, React.CSSProperties>({ length }, (_, index) => {
      if (width === undefined) {
        return {}
      }
      if (Array.isArray(width)) {
        return {
          width: width[index]
        }
      }
      return {
        width: index === length - 1 ? width : undefined
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

const renderTitle = ({ title = true }: Partial<SkeletonProps>) => {
  const titleStyle: React.CSSProperties = {}
  if (typeof title !== 'boolean') {
    titleStyle.width = title
  }

  return title ? (
    <div className={classNames(wrapperClass('title'))} style={titleStyle} />
  ) : null
}

const renderContent = ({ paragraph, title }: Partial<SkeletonProps>) => {
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
