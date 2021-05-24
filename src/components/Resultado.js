import React from 'react';
import Imagen from './Imagen';
import Paginado from './Paginado'

class Resultado extends React.Component{
    mostrarImagenes = ()=>{
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        console.log(imagenes);

        return(
            <div className="grid grid-cols-4 gap-9 mx-20 mt-10 pb-10">
                {imagenes.map(imagen =>(
                    <Imagen
                        imagen={imagen}
                        key={imagen.id} 
                    />
                ))}
            </div>
        )

    }
  render(){
    return(
        <div className="text-center">
            {this.mostrarImagenes()}
            <Paginado 
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}
            />
        </div>
    )
  }
}

export default Resultado;