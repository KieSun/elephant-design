import { bem } from '../utils'

interface ImgObserver {
  src: string
  imgRef: React.RefObject<HTMLImageElement>
  onSuccessHandler: () => void
  // threshold?: Array<number>
  onErrorHandler: () => void
  scrollBox: HTMLElement | null
}
// const DEFAULT_THRESHOLD = [0.01]
export const useImgObserver = (args: ImgObserver) => {
  const {
    src,
    imgRef,
    onSuccessHandler,
    // threshold = DEFAULT_THRESHOLD,
    onErrorHandler,
    scrollBox
  } = args

  const io = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const [{ target, intersectionRatio }] = entries
      if (intersectionRatio <= 0) {
        return
      }
      ;(target as HTMLImageElement).src = src
      target.addEventListener('load', onSuccessHandler)
      target.addEventListener('error', onErrorHandler)
    },
    { root: scrollBox }
  )
  const observe = () => {
    io.observe(imgRef.current!)
  }
  const disconnect = () => {
    io.disconnect()
    imgRef.current!.removeEventListener('load', onSuccessHandler)
    imgRef.current!.removeEventListener('error', onErrorHandler)
  }

  return [observe, disconnect]
}
export const wrapperClass = bem('image')
