import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado'

class App extends Component{

    state = {
      termino: '',
      imagenes: [],
      pagina: ''
    }

    scroll = () => {
      const elemento = document.querySelector('.inicio');
      elemento.scrollIntoView('smooth', 'start')
    }

    paginaAnterior = () => {
      let pagina = this.state.pagina;
      if(pagina === 1)return null;
      pagina--
      this.setState({
        pagina
      },()=>{
        this.consultarApi();
        this.scroll();
      });
      console.log(pagina);
    }

    paginaSiguiente = () => { 
      let pagina = this.state.pagina;
      pagina++
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
      console.log(pagina);
    }

    consultarApi = () =>{
      const pag = this.state.pagina;
      const url = `https://pixabay.com/api/?key=21770968-d90ddf947d94f2cc2740b1f9f&q=${this.state.termino}&per_page=30&page=${pag}`;
      console.log(url);

      fetch(url).then(resp => resp.json()).then(result => this.setState({imagenes: result.hits}));
    }

  //Funcion que obtiene el prop del componente hijo
  datosBusqueda = (termino) => {
    console.log(termino);
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return(
      <div className="bg-gray-800 h-full min-h-screen">
      
        <div className="text-center bg-gray-400 py-7 px-4">
            <span className="font-bold text-2xl inicio">React-Pix</span><br></br>
            <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado 
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />
      </div>
    )
  }
}

export default App;
