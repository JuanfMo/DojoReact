import React, { Component } from 'react';
import logo from './logo.svg';
import Resultado from './Resultado';
import './App.css';

class App extends Component {
  
  constructor(props){
      super(props);
      this.buscar('audifonos');
      this.state ={
        resultados: []
      }
  }

  cambioInput(elemento){
    console.log('Valor: ', elemento.target.value);
  }

//Fetch con funcion anonima
//el fetch sirve para hacer una peticion callback, luego de esto seguirà el then que serà la accion a seguir
//en el callback

    /*fetch('https://api.mercadolibre.com/sites/MCO/search?q='+busqueda)
      .then((resultado) => console.log("Resultado Json: ", resultado.json()))
  /*}*/


//Fetch con la funcion especificada
buscar(busqueda){

    fetch('https://api.mercadolibre.com/sites/MCO/search?q='+busqueda).then((resultado)=> resultado.json()).then((json)=>{
      this.setState({
        resultados: json.results
      })
    })
}

  
  render() {
    return (
        <div>
          <p> Juan Fernando Moreno </p>
          <input type="text" placeholder="Búsqueda" onChange={this.cambioInput.bind(this)}></input>
        {this.state.resultados.map(function (resultado){
          return <Resultado resultado={resultado}></Resultado>;
        })}
      </div>
    );
  }
}

export default App;
