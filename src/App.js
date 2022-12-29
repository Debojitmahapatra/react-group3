
import React from 'react'
import Navbar from './componentes/Navbar';
import Header from './componentes/Header';
import Feature from './componentes/Feature';
import Offer from './componentes/Offer';
import About from './componentes/About';
import Contact from './componentes/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      
      <Feature/>
      <Offer/>
      <About/>
      <Contact/>

    </div>
  );
}

export default App;
