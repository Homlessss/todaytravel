import React from 'react';
import './App.css';
import MenubgWrapper from './component/menu-bg-wrapper/menu-bg-wrapper';
import Header from './component/header/header';
import Slideshow from './component/slider/slideshow'

function App() {
  return (
    <div className="App">
      <MenubgWrapper/>
      <Header/>
      <Slideshow/>
    </div>
  );
}

export default App;
