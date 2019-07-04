import React, { useState, useEffect } from 'react'
import '../../dist/index.es.css'
import { Loading, Skeleton } from '../../dist/index.es'

const App: React.FC = () => {
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
    <div className="App">
      <Loading text="Loading" indicatorColor="red" vertical size={20} />
      <Skeleton
        paragraph={{ rows: 2, width: ['40px', '20px'] }}
        loading={skeletonLoading}
        avatar={false}
        animation={true}
        title={'299px'}
      >
        <div>加载完成</div>
      </Skeleton>
      <Skeleton
        paragraph={{ width: ['400px', undefined, '200px'] }}
        title="100px"
      />
    </div>
  )
}

export default App
