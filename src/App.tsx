import React from 'react';
import logo from './logo.svg';
import '../node_modules/mdbootstrap/css/bootstrap.min.css';
import '../node_modules/antd/dist/antd.min.css'
import Homepage from '../src/component/Homepage';
import Context from './context/context';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Context>
        <Homepage />
      </Context>
    </div>
  );
}

export default App;
