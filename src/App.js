import { Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Map from './components/map'
function App() {
  return( 
  <>
  <nav className='navbar'>
        <ul className="nav-list">
            <img src="" alt="LOGO" />
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/map'>Map</Link>
            </li>
        </ul>
       </nav> 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/map' element={<Map/>} />
  </Routes>
  </>
  );
}

export default App;
