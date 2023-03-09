import React, { useState } from 'react'
import './styles.css'
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        universidad: '',
        carrera: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >= 3 && user.nombre.split('')[0] !== " " &&
            user.universidad.length >= 6 &&
            user.carrera !== ''){
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }

  return (
    <div> 
        <form onSubmit={handleSubmit} className='formulario'>
            <div>
                <label>Nombre completo: </label>
                <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            </div>
            <div>
                <label>Universidad: </label>
                <input type="text" value={user.universidad} onChange={(e) => setUser({...user, universidad: e.target.value})}/>
            </div>

            <div>
                <p>Cual rama de la programacion te interesa:</p>
                <select value={user.carrera} onChange={(e) => setUser({...user, carrera: e.target.value})}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                    <option value="DevOps">DevOps</option>
                </select>
            </div>
            <button>Enviar</button>
        </form>
        {err ? 'Por favor chequea que la información sea correcta' : null}
        {show && <Card nombre={user.nombre} universidad={user.universidad} carrera={user.carrera} />}
        

    </div>
   
  )
}
export default Form