import React from 'react'

import { useMyHook } from 'use-unique-id'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
