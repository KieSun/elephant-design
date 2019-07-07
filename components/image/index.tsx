import React, { useState, useRef, useLayoutEffect } from 'react'
import './index.less'
import classNames from 'classnames'
import { wrapperClass, useImgObserver } from './utils'

interface ImageState {
  status: number
  currentCount: number
}
interface ImageProps {
  src: string
  alt: string
  width?: string
  height?: string
  scrollBox?: HTMLElement
  isLazyLoad?: boolean
  loading?: React.ReactNode
  error?: React.ReactNode
  attempt?: number
  onClick?: React.MouseEventHandler<HTMLImageElement>
  onLoadSuccess?: () => void
  onLoadError?: () => void
}

//TODO:enum eslint检测错误 LOADING' is defined but never used,只能替换成const 代替enum
//图片的状态
const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2
}

//默认图片的大小
const DEFAULT_SIZE = '100px'

//默认加载中的占位
const DEFAULT_LOADING = (
  <p className={classNames(wrapperClass('loading '))}>加载中....</p>
)

//默认加载失败的占位
const DEFAULT_ERROR = (
  <p className={classNames(wrapperClass('error '))}>加载失败</p>
)

//默认尝试次数
const DEFAULT_ATTEMPT = 1

const Image = (props: ImageProps) => {
  /**
   * TODO: 解构不放到最顶部，分开放到各个函数里面lint会报错?
   */
  const {
    width = DEFAULT_SIZE,
    height = DEFAULT_SIZE,
    src,
    alt,
    loading = DEFAULT_LOADING,
    error = DEFAULT_ERROR,
    isLazyLoad,
    onLoadSuccess,
    onLoadError,
    onClick,
    attempt = DEFAULT_ATTEMPT,
    scrollBox = null
  } = props
  const [state, setState] = useState<ImageState>({
    status: STATUS.LOADING,
    currentCount: 0
  })
  //图片的dom对象
  const imgRef = useRef<HTMLImageElement>(null)
  const { status } = state
  //加载成功
  const onSuccessHandler = () => {
    setState({
      ...state,
      status: STATUS.SUCCESS
    })
    // onLoadSuccess && onLoadSuccess()
    if (onLoadSuccess) {
      onLoadSuccess()
    }
  }
  //加载失败
  const onErrorHandler = () => {
    const { currentCount } = state
    const { current } = imgRef
    const isLastAttempt = currentCount === attempt - 1 //尝试若干次直到等于最大尝试次数
    if (src && !isLastAttempt) {
      current!.src = src
      state.currentCount += 1
    } else {
      //TODO: 等公共utils有记录之前状态的hooks后修改写法
      state.status = STATUS.ERROR
      // 触发一次更新
      setState({
        ...state
      })
      if (onLoadError) {
        onLoadError()
      }
    }
  }
  const [observe, disconnect] = useImgObserver({
    src,
    imgRef,
    onSuccessHandler,
    onErrorHandler,
    scrollBox
  })
  useLayoutEffect(() => {
    if (!src) {
      setState({
        ...state,
        status: STATUS.ERROR
      })
    }
    if (isLazyLoad) {
      observe()
    }
    return () => {
      if (isLazyLoad) {
        disconnect()
      }
    }
  }, [src])
  const renderPlaceholder = () => {
    let dom
    switch (status) {
      case STATUS.LOADING:
        dom = loading
        break
      case STATUS.ERROR:
        dom = error
        break
      default:
        dom = null
    }
    return dom ? (
      <div className={classNames(wrapperClass('placeholder'))}>{dom}</div>
    ) : null
  }
  const renderImage = () => {
    if (status === STATUS.ERROR) {
      return null
    }
    const normalProps = {
      ref: imgRef,
      className: classNames(wrapperClass('image')),
      onClick
    }

    return isLazyLoad ? (
      <img {...normalProps} alt={alt} />
    ) : (
      <img
        {...normalProps}
        src={src}
        alt={alt}
        onError={onErrorHandler}
        onLoad={onSuccessHandler}
      />
    )
  }

  let style = {
    width,
    height
  }
  if (state.status !== STATUS.SUCCESS) {
    // 防止用户设置height为auto时候，loading和error时候整个组件没有高度
    style = {
      ...style,
      height: height === 'auto' ? DEFAULT_SIZE : height
    }
  }
  return (
    <div className={classNames(wrapperClass())} style={style}>
      {renderImage()}
      {renderPlaceholder()}
    </div>
  )
}
export default Image
