import Hero from './Hero';
import Navbar from './Navbar';

import '../css/home.css'
import Sld from './Sld.js';
function Home() {
  return (
    <div className='  '>
       
       <div className='main'>
         <Hero/>
         <Sld />
       </div>
    </div>
  );
}

export default Home;
