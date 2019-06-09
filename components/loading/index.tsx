import * as React from 'react'

interface LoadingProps {
  size?: 'small' | 'default' | 'large'
  vertical?: Boolean
  color?: string
  text?: string
  toast?: Boolean
  indicator?: React.ReactElement<any>
}

const defaultIndicator = null

const Loading = (props: LoadingProps) => {
  console.log(props, defaultIndicator)
  return <div>1</div>
}

export default Loading
