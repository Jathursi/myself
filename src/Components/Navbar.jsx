import React from 'react'
import logo from '../assets/V1.webp'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Navbar() {
  return (
    <div className='flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} className='mx-2' width={100} height={100} alt='logo'/>
            </a>
        </div>
        <div className='m-8  flex items-center justify-center gap-5 text-2xl'>
            <a href='www.linkedin.com/in/jathursika-velummayilum' target='_blank' rel='noopener noreferrer' aria-label='Linkdin'>
                {/* <i className='fab fa-linkedin-in'></i> */}
                <IoLogoLinkedin className='text-3xl hover:scale-110 cursor-pointer'/>
            </a>
            <a href='https://github.com/Jathursi' target='_blank' rel='noopener noreferrer' aria-label='Github'>
                {/* <i className='fab fa-github'></i> */}
                <FaGithub className='text-3xl hover:scale-110 cursor-pointer'/>
            </a>
            <a href='facebook' target='_blank' rel='noopener noreferrer' aria-label='facebook'>
                {/* <i className='fab fa-twitter'></i> */}
                <FaFacebookSquare className='text-3xl hover:scale-110 cursor-pointer'/>
            </a>
            {/* <a href='facebook' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <i className='fab fa-facebook'></i>
                H
            </a> */}

        </div>
    </div>
  )
}

export default Navbar