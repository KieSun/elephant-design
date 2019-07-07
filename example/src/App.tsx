import React from 'react'
import '../../dist/index.es.css'
import { Image } from '../../dist/index.es'

const App: React.FC = () => {
  const src =
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2508095418,2365247693&fm=26&gp=0.jpg'
  return (
    <div className="App">
      <Image src="ss" />
      <Image
        src={src}
        onClick={(e: any) => {
          console.log(e)
        }}
      />
      <Image src={src} height="auto" />
      <div style={{ marginTop: '900px' }}>
        <Image src={src} height="auto" isLazyLoad={true} />
      </div>
      <div style={{ marginTop: '1600px' }}>
        <Image src={src} height="auto" isLazyLoad={true} />
      </div>
    </div>
  )
}

export default App
