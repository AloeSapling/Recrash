import { Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Map from './components/map'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return( 
  <>
  < Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/map' element={<Map/>} />
  </Routes>
  </>
  );
}

export default App;
