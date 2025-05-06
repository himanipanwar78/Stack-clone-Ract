import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="navbar flex justify-center items-center gap-2 p-2 border-t-2 border-b border-t-orange-500 w-5px border-b-gray-300">
     
      <div className='logo'>
        <p className='text-xl '>Stack <span className='font-bold'>overflow</span></p>
      </div>
      <div className='sm:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon 
 icon={menuOpen ? faTimes : faBars} className="text-2xl"  /></button>
      </div>

      {menuOpen && (
      <ul className='nav-links flex justify-center items-center font-light text-sm/7 px-[10px] py-[5px]'>
        <li className='hover:bg-gray-200 px-3 py-0.5 rounded-[50px]'>About</li>
        <li className='hover:bg-gray-200 px-3 py-1 rounded-[50px]'>Products</li>
        <li className='hover:bg-gray-200 px-3 py-1 rounded-[50px]'>overflowAI</li>
      </ul>
      ) }


      <div className='search-bar'>
      <FontAwesomeIcon icon={faSearch} className="absolute  top-1/25 transform -translate-y-1/4 px-[8px] text-gray-600" />

      <input
  className='input-bar w-full sm:w-[400px] lg:w-[700px] px-4 py-1.5 rounded-md text-sm border border-gray-400'
  type='text'
  placeholder='Search..'
/>

      </div>

      <div className='login-button flex gap-2 '>
        <button className='login px-[10px] py-[5px] border border-solid border-customBlue-500 rounded-[8px] text-sm/6  hover:bg-customBlue'>Login</button>
        <button className='px-[10px] py-[5px] border border-solid rounded-[8px] text-sm/6 text-white' style={{ borderColor: '#155CA2', backgroundColor: '#155CA2' }}>Signup</button>
      </div>
    </nav>
  );
}
