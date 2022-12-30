
import React from 'react'
import Navbar from './componentes/Navbar';
import Header from './componentes/Header';
import Feature from './componentes/Feature';
import Offer from './componentes/Offer';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Futtter from './componentes/Futtter';
import Price from './componentes/Price';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      
      <Feature/>
      <Offer/>
      <Price/>
      <About/>
      <Contact/>
      <Futtter/>

    </div>
  );
}

export default App;
