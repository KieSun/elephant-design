import * as React from 'react'
import classNames from 'classnames'
import { outputIconProps, Props, wrapperClass } from './help'
import './index.less'

const CloseCircle = (props: Props) => {
  const { iconStyle, onClick } = outputIconProps(props)
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      style={iconStyle}
      className={classNames(wrapperClass())}
      onClick={onClick}
    >
      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" />
    </svg>
  )
}

export default CloseCircle
