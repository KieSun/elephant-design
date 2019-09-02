import * as React from 'react'
import classNames from 'classnames'
import { outputIconProps, Props, wrapperClass } from './help'
import './index.less'

const More = (props: Props) => {
  const { iconStyle, onClick } = outputIconProps(props)
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
