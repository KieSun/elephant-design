import React from 'react'
import '../../dist/index.es.css'
import { Loading, Tag } from '../../dist/index.es'

const App: React.FC = () => {
  const onTagClick = () => {
    console.log('tag clicked')
  }

  return (
    <div className="App">
      <Loading text="Loading" indicatorColor="red" vertical size={20} />
      <Tag size="large" round onClick={onTagClick}>
        large round
      </Tag>
      <Tag size="large" plain color="pink" onClick={onTagClick}>
        large plain pink
      </Tag>
      <Tag size="large" plain color="red">
        large plain red
      </Tag>
      <Tag size="large" plain color="yellow">
        large plain yellow
      </Tag>
      <Tag size="large" plain color="orange">
        large plain orange
      </Tag>
      <Tag size="large" plain color="cyan">
        large plain cyan
      </Tag>
      <Tag size="large" plain color="green">
        large plain green
      </Tag>
      <Tag size="large" plain color="blue">
        large plain blue
      </Tag>
      <Tag size="large" plain color="purple">
        large plain purple
      </Tag>
      <Tag size="large" plain color="geekblue">
        large plain geekblue
      </Tag>
      <Tag size="large" plain color="magenta">
        large plain magenta
      </Tag>
      <Tag size="large" plain color="volcano">
        large plain volcano
      </Tag>
      <Tag size="large" plain color="gold">
        large plain gold
      </Tag>
      <Tag size="large" plain color="lime">
        large plain lime
      </Tag>
    </div>
  )
}

export default App
