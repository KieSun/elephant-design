import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface SkeletonProps {
  animation?: boolean
  avatar?: boolean | { shape: 'circle' | 'square' }
  loading?: boolean
  paragraph?: boolean | ParagraphObject
  title?: boolean
  children?: React.ReactChildren
}
interface ParagraphObject {
  rows: number
}
type AvatarModifier = 'circle'

const wrapperClass = bem('skeleton')

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
  let rows: number
  if (typeof paragraph === 'boolean') {
    rows = paragraph ? 3 : 0
  } else {
    rows = paragraph.rows
  }

  return (
    <div className={classNames(wrapperClass('paragraph'))}>
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}

const renderContent = ({ paragraph, title = true }: Partial<SkeletonProps>) => {
  return (
    <div className={classNames(wrapperClass('content'))}>
      {title ? <h3 className={classNames(wrapperClass('title'))} /> : null}
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
