import Hero from './Hero';
import Navbar from './Navbar';
import Leafs_and_clouds from './Leafs_and_clouds';

import '../css/home.css'
import Sld from './Sld.js';
function Home() {
  return (
    <div className=' '>
       
       <div className='main'>
         <Hero/>
         <Sld />
         <Leafs_and_clouds />
       </div>
    </div>
  );
}

export default Home;
