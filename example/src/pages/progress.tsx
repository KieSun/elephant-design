import { Progress } from '../../../dist/index.es'
import React, { useState } from 'react'

export default () => {
  const [progress, setPrg] = useState(10)
  setTimeout(() => {
    setPrg(50)
  }, 2000)
  return (
    <div>
      <Progress
        percentage={progress}
        text={123}
        style={{ marginTop: '10px', color: 'red' }}
        color="red"
      />
      <Progress
        percentage={20}
        style={{ marginTop: '10px' }}
        textColor="green"
        textStyle={{ background: '#5a3308' }}
      />
      <Progress percentage={30} style={{ marginTop: '10px' }} />
      <Progress percentage={50} style={{ marginTop: '10px' }} />
      <div style={{ width: '200px' }}>
        <Progress
          percentage={20}
          style={{ marginTop: '10px' }}
          showText={false}
        >
          <span
            style={{
              position: 'absolute',
              top: '0px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'red',
              left: '100%'
            }}
          ></span>
        </Progress>
      </div>
    </div>
  )
}
