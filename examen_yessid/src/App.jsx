import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>QUE QUIERES ESTUDIAR</h1>
      <Form></Form>
    </div>
  )
}

export default App
