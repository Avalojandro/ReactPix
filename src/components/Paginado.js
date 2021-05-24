import React from 'react';

 const Paginas = (props) =>{
    return(
        <div className="py-3 px-2 text-center pb-12">
            <button onClick={props.paginaAnterior} className="px-2 py-2 bg-blue-400 mx-2 rounded">&larr; Anterior</button>
            <button onClick={props.paginaSiguiente} className="px-2 py-2 bg-blue-400 mx-2 rounded">Siguiente &rarr;</button>   
        </div>
    )
  }

  export default Paginas;