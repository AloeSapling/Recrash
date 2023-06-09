import Hero from './Hero';
import Navbar from './Navbar';

import Footer from './footer';

import '../css/home.css'
import Sld from './Sld.jsx';
function Home() {
  return (
    <div className=' '>
       
       <div className='main '>
         <Hero/>
         <Sld />
       </div>
    </div>
  );
}

export default Home;
