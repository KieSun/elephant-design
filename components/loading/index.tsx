import * as React from 'react'
import classNames from 'classnames'
import { bem } from '../utils'
import './index.less'

interface LoadingProps {
  size?: number
  vertical?: boolean
  indicatorColor?: string
  text?: string
  toast?: boolean
  indicator?: React.ReactElement<any>
}

const wrapperClass = bem('loading')

const defaultIndicator = (
  <span className={classNames(wrapperClass('indicator'))} />
)

function renderIndicator(props: LoadingProps) {
  const { indicator, indicatorColor = '#1989FA', size = 26 } = props
  if (React.isValidElement(indicator)) {
    return React.cloneElement(indicator)
  }
  return React.cloneElement(defaultIndicator, {
    style: {
      borderColor: indicatorColor,
      borderBottomColor: 'transparent',
      width: `${size}px`,
      height: `${size}px`
    }
  })
}

const Loading = (props: LoadingProps) => {
  const { text, vertical } = props
  return (
    <div className={classNames(wrapperClass({ vertical }))}>
      {renderIndicator(props)}
      {text ? (
        <span className={classNames(wrapperClass('text', { vertical }))}>
          {text}
        </span>
      ) : null}
    </div>
  )
}

export default Loading
