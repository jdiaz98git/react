import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
      constructor(props) {
      super(props)
      this.state = { items: [],
                    isLoaded: false,
                  }
      }
  componentDidMount() {
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d4335ea0')
      .then(res=>res.json())
      .then(json =>{
        this.setState({
          isLoaded: true,
          items: json,
      })
      });
  }
  
  render() {
    const { isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Cargando...</div>
    }else{
      return (

    <div className="App">
        { items.map(item => (
          <div className="movie">
              <h2>{item.Title}</h2>
              <div>
                  <img width="200" id="imagen"  src={item.poster}/>
              </div>
              <p>({item.Year})</p>
              <div id="texto">
                  <p>Tipo :{item.Type}</p>
                  <p>ID : {item.imdbID}</p>
              </div>
          </div>
        ))}
      </div>
      )
  }
}
}
export default App;
