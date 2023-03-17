import React, { useEffect, useState } from 'react'

const Comentario = () => {
    const [data, setdata] = useState([])
    const [comentario, setComentario] = useState({
        id: 0,
        texto:'',
        boton:false
    })

    const url = 'https://jsonplaceholder.typicode.com/comments'

    //fetch dentro de use effect para que lo haga una sola vez
    //antes de el setdata hacer console log para ver que contiene
    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setdata(data))     
    // }, [])

    //tambien se puede usar con async, que es otra forma usar asincronismo
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url)
            let dataOk = await response.json()
            console.log(dataOk)
            setdata(dataOk)    
        }
        fetchData()
    }, [])

    //el if lo hago porque al inicio data esta vacio y asi evito que no me
    // saque error por tratar de ingresar a un array null
    useEffect(() => {
        if (data.length > 1) {
            setComentario({...comentario, texto: data[comentario.id].body})
        }
    },[comentario.boton])


    //console.log(data[0])
    return (
        <div>
            <h1>Mesa Con API de Comentarios</h1>
            <label>escriba unnumero entre 0-500</label>
            <input type='number' min='1' max='500' onChange={
                (e) => setComentario({...comentario, id: e.target.value})
                }></input>
            <button onClick={
                () => setComentario({...comentario, boton: !(comentario.boton)})
                }> BUSCAR </button>
            <p>{comentario.texto}</p>
        </div>
    )
}

export default Comentario