import React from 'react'

import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Design from './Components/Design/Design';
import Metho from './Components/Methodology/Metho';
import Services from './Components/services/Services';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    
    <div className="App">
        <NavBar/>
        <About/>
        <Design/>
        <Services/>
        <Metho/>
        <Footer/>
    </div>
 
  );
}

export default App;

