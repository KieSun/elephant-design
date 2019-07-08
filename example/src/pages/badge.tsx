import { Badge } from '../../../dist/index.es'
import React from 'react'

export default () => (
  <div>
    <div>
      <Badge count={100} />
    </div>
    <div>
      <Badge text="Elephant Badge" />
    </div>
    <div>
      <Badge dot>
        <span style={{ background: '#ccc', color: '#fff', padding: '0 5px' }}>
          Elephant Badge
        </span>
      </Badge>
    </div>
  </div>
)
