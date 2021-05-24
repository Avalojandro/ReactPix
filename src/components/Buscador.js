import React from 'react';

class Buscador extends React.Component{

    busquedaRef = React.createRef();  
    obtenerDatos = (e) => {
        e.preventDefault();

        //Obteniendo el valor del input
        const term= this.busquedaRef.current.value;
        
        //Pasando a traves de props el valor del input hacia el componente
        this.props.datosBusqueda(term)
    }


  render(){
    return(
        <form onSubmit={this.obtenerDatos}>
            <input className="my-2 px-3 rounded h-8 w-96" ref={this.busquedaRef} type="text" placeholder="Busca una imagen"></input><br></br>
            <button className="my-2 px-3 py-2 rounded text-white bg-blue-500">Buscar</button>
        </form>
    );
  }
}

export default Buscador;