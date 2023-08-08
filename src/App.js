
import './App.css';
import React, { Component } from 'react';

const yas = 18
const tf = true
const isim = "omer"


class App extends Component {

  render() {
    return (

      <div className='App'>
        <h1 className='Welcome'>Hosgeldin </h1>
        <h1> {yas} </h1>
        <h1>  {isim} </h1>

        <div>
          {
            tf ? <p>Kayitli</p>
              : null

          }
        </div>


      </div>



    );
  }
}

export default App;
