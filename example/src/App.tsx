import React from 'react'
import '../../dist/index.es.css'
import { Loading } from '../../dist/index.es'

const App: React.FC = () => {
  return (
    <div className="App">
      <Loading text="Loading" color="red" vertical size={20} />
    </div>
  )
}

export default App
