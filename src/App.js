import React, { Component } from 'react';
import BaseForm from './components/BaseForm.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../public/images/circular-shape-silhouette.svg';


class App extends Component {

  render() {
    return (
      <div className="">
        <header className="container">
          <p className="my-4 font-weight-bold">
            react-redux
          </p>                   
        </header>  
        <div className="circle"></div>         
        <div className="container">
          <div className="row align-items-center vh-80">
            <div className="col">
              <h1 className="font-em-4 my-2">Let's get started</h1>
              <p className="mb-4">This is a react-redux exercise. Please fill in any letter or number and click Submit.</p>
              <div className="form-wrap">
                <BaseForm /> 
              </div>              
            </div>            
          </div>          
        </div>    
      </div>
    );
  }
}

export default App;
