import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('Hello, World!')

  const handleClick = () => {
    setText(text === 'Hello, World!' ? 'Button clicked!' : 'Hello, World!')
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={handleClick}>
        Click me!
      </button>
    </div>
  )
}

export default App