import "./styles.css";
import React, {useState} from "react";

function App() {

  const [disciplina, setDisciplina] = useState({
    nombre:"",
    nota:0,
    notasBaseDatos:[],
    notasBack: [],
    notasFront: [],
    notasDevops: []
  })

  const agregarNota = (array, nota) => {
    return array.concat(nota)
  }

  const promNotas = (array) => {
    if (array.length >=1) {
      const suma = array.reduce((a, b) => a + b, 0)       
      const prom = suma/array.length
      return prom
    }
    return 0
  }


  function handleSubmit(event) {
    event.preventDefault();

    if (disciplina.nombre === 'database') {
      setDisciplina({...disciplina, notasBaseDatos:agregarNota(disciplina.notasBaseDatos, disciplina.nota)})
    } else if (disciplina.nombre === 'backend') {
      setDisciplina({...disciplina, notasBack:agregarNota(disciplina.notasBack, disciplina.nota)})
    } else if (disciplina.nombre === 'frontend') {
      setDisciplina({...disciplina, notasFront:agregarNota(disciplina.notasFront, disciplina.nota)})
    } else if (disciplina.nombre === 'devops') {
      setDisciplina({...disciplina, notasDevops:agregarNota(disciplina.notasDevops, disciplina.nota)})
    }
  }


  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">

          {/* seleccion de disciplina */}
          <select onChange={(event) => setDisciplina({...disciplina, nombre:event.target.value})}>
            <option selected disabled>
              Selecione una carrera
            </option>
            <option value="database">Base de Datos</option>
            <option value="backend">Desarrollo Backend</option>
            <option value="frontend">Desarrollo Frontend</option>
            <option value="devops">Devops</option>
          </select>

          {/* nota a ingresar */}
          <input type='number' min='0' max='10' onChange={(event) => setDisciplina({...disciplina, nota:Number(event.target.value)})}/> 
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Cantidad de Estudiantes</th>
              <th>Promedio de Calificaciones de los Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base de Datos</td>
              <td>{disciplina.notasBaseDatos.length}</td>
              <td>{promNotas(disciplina.notasBaseDatos)}</td>
            </tr>

            <tr>
              <td>Desarrollo Frontend</td>
              <td>{disciplina.notasFront.length}</td>
              <td>{promNotas(disciplina.notasFront)}</td>
            </tr>

            <tr>
              <td>Desarrollo Backend</td>
              <td>{disciplina.notasBack.length}</td>
              <td>{promNotas(disciplina.notasBack)}</td>
            </tr>

            <tr>
              <td>Devops</td>
              <td>{disciplina.notasDevops.length}</td>
              <td>{promNotas(disciplina.notasDevops)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
