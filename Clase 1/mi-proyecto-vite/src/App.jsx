import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ClassComponent, OtroComponente} from './components/ClassComponent'
import FuncComponent from './components/FunctionComponent'
import Card from './components/Card'
import Children_MesaTrabajo from './components/Children_MesaTrabajo'

function App() {
  const [count, setCount] = useState(0)

  let elemento = [4, 22, 25]

  return (
    <>          {/* esto es fragment es lo mismo que <fragment></fragment> si lo hibiese dejado con <div> me hubiese creado un div por cada component*/}
      <ClassComponent></ClassComponent>
      <OtroComponente></OtroComponente>

      <FuncComponent></FuncComponent>

      <Card elemento={elemento[0]} /> 
      <Card elemento={elemento[1]} />
      <Card elemento={elemento[2]} />

      <Children_MesaTrabajo nombre={"yessid"}/>
    </>
  )
}

export default App
