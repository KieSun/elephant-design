import { Width } from './types'

// eslint-disable-next-line import/prefer-default-export
export const formatSize = (width: Width) =>
  typeof width === 'number' ? `${width}px` : width
