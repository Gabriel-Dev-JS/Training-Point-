import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Inferiores from './pages/Inferiores'
import Superiores from './pages/Superiores'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'


function App() {
return (
  <Router>
    <Routes>
      <Route path="/Inferiores" element={<Inferiores/>}/>
      <Route exact path="/Superiores" element={<Superiores/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
    </Routes>
  </Router>
);
} 

export default App;