
import './App.css';
import React, {useState,useRef} from 'react';

function App() {

    
  const nombre = useRef()
  const apellido = useRef()
  const telefono = useRef()

  const [array,setArray]=useState([])
  const [id,setId]=useState(0)

  const onSubmit = (e) =>{
   
    e.preventDefault();

    const json={
      "id":id,
      "nombre":nombre.current.value,
      "apellido":apellido.current.value,
      "telefono":telefono.current.value
    }


    array.push(json)
    setArray(array)
    setId(id+1)
    
  } 

  return (

    
    <div className="App">
      
            <form onSubmit={onSubmit}>
                  <div className="form-group">
                          <input type="text" className="form-control nombre"   ref={nombre} placeholder="Nombre" required="required"></input>
                  </div>        
                  <div className="form-group">
                          <input type="text" className="form-control apellido" ref={apellido} placeholder="Apellido" required="required"></input>
                  </div>   
                  <div className="form-group">     
                          <input type="text" className="form-control telefono" ref={telefono} placeholder="Telefono" required="required"></input>
                  </div>        
                          <button type="submit" className="btn btn-success">Enviar</button>
            </form>
         
        <div className='container'>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th >Id</th>
                  <th >First name</th>
                  <th >Last name</th>
                  <th >Phone</th>
                </tr>
              </thead>
              <tbody>
              {array.map(dato => {   
                            return (<tr key={dato.id}>
                                      <td>{dato.id+1}</td>
                                      <td>{dato.nombre}</td>
                                      <td>{dato.apellido}</td>
                                      <td>{dato.telefono}</td>                          
                                    </tr>)
              })
              }
              </tbody>
            </table>          
        </div>
    </div>
  );
}

export default App;
