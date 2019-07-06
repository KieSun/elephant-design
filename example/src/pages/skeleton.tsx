import { Skeleton } from '../../../dist/index.es'
import React, { useState, useEffect } from 'react'

const SkeletonPage = () => {
  const [skeletonLoading, setSkeletonLoading] = useState(true)

  useEffect(() => {
    const timmer = setTimeout(() => {
      setSkeletonLoading(() => false)
    }, 3000)

    return () => {
      clearTimeout(timmer)
    }
  }, [])
  return (
    <div>
      <Skeleton
        paragraph={{ rows: 2, width: ['40px', '20px'] }}
        loading={skeletonLoading}
        avatar={false}
        animation={true}
        title={{ width: 300 }}
      >
        <div>加载完成</div>
      </Skeleton>
      <Skeleton
        avatar={{ size: 50 }}
        paragraph={{ width: ['400px', undefined, 10] }}
        title={{ width: 100 }}
      />
    </div>
  )
}

export default SkeletonPage
