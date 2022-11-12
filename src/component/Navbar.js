import React, { Component } from 'react'
import pic from '../image/image 1.png'
import './Navbar.css';

import { BsPersonCircle } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';


export default class Navbar extends Component {
  render() {
    return (
      <>
         <nav className="navbar">
            <div className='container'>
              <div>
               <img src={pic}  classname="d-inline-block align-top" alt="" /></div>
        
               <div className='NavRight d-flex'>
                    <a href="/ " className='textNot'>My Assignment</a>
                    <a href="/ " className='textNo'>Chat with Mentor</a>

                    <div className='extra d-flex'>
                        <div className='logo px-1'>
                          <span ><BsPersonCircle/></span>
                        </div>
                       <a className='text' href="/ ">ProfileName <IoIosArrowDown/></a>
                    </div>
               </div>
             </div>
           </nav>
      </>
    )
  }
}
