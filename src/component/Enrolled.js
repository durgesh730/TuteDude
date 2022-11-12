import React, { Component } from 'react'
import First from './First'
import Navbar from './Navbar'
import './Enrolled.css'; 
import { WiDirectionLeft } from 'react-icons/wi';
import { Link } from 'react-router-dom';

export default class Enrolled extends Component {
  render() {
    return (
      <>  
           <Navbar/>
           <First head=" UI/UX > Refer & Earn > Friends Referred "/>
          

           <div className='container'>
                 <div className='Goback'>
                      <Link to= "/"> 
                        <span><WiDirectionLeft/>go back</span>
                      </Link>
                 </div>
           </div>

           <section className='CodeBalance'>
                 <div className='code'>
                       <span>Your Referral Code </span>
                       <a>EDCH54</a>
                 </div>

                 <div className='Balance'>
                      <span>Wallet Balance</span>
                       <a>₹500</a>
                 </div>
           </section>


<div className='container'>
    <div className='headingFor-card'>
           <span>Friend who Enrolled(3)</span>
    </div>
</div>

         <div className='container'>
           <section className='enrolledCards'>
                   <div className='dhiraj'>
                          <div className='topHeading'>
                              <span>Dhiraj Saxsena</span>   
                              <a>14 Sep, 2022</a> 
                          </div>

                          <small>Course Enrolled(6)</small>

                          <div className='CourseName'>
                                <a className='card-text'>UI/UX</a>
                                <a className='card-text'>Photoshop</a>
                                <a className='card-text'>Illustrator</a>
                          </div>

                          <div className='Subject'>
                                <a className='card-text'>Python</a>
                                <a className='card-text'>MERN</a>
                                <a className='card-text'>Java</a>
                          </div>

                          <div className='Amount'>
                                  <span>Referral Amount</span>
                                  <a>₹185</a>
                          </div>
                   </div>

                   <div className='dhiraj'>
                          <div className='topHeading'>
                              <span>Subhash Mishra</span>   
                              <a>15 Sep, 2022</a> 
                          </div>

                          <small>Course Enrolled(23)</small>

                          <div className='CourseName'>
                                <a className='card-text'>UI/UX</a>
                                <a className='card-text'>Photoshop</a>
                                <a className='card-text'>Illustrator</a>
                          </div>

                          <div className='Subject'>
                                <a className='card-text'>Python</a>
                                <a className='card-text'>MERN</a>
                                <a className='card-text'>Java</a>
                                <a className='card-text'>c++</a>
                          </div>

                          <div className='Amount'>
                                  <span>Referral Amount</span>
                                  <a>₹485</a>
                          </div>
                   </div>

                   <div className='dhiraj'>
                          <div className='topHeading'>
                              <span>Prafull Kumar</span>   
                              <a>16 Sep, 2022</a> 
                          </div>

                          <small>Course Enrolled(50)</small>

                          <div className='CourseName'>
                                <a className='card-text'>UI/UX</a>
                                <a className='card-text'>Photoshop</a>
                                <a className='card-text'>Illustrator</a>
                          </div>

                          <div className='Subject'>
                                <a className='card-text'>Python</a>
                                <a className='card-text'>MERN</a>
                                <a className='card-text'>Java</a>
                                <a className='card-text'>c++</a>
                          </div>

                          <div className='Amount'>
                                  <span>Referral Amount</span>
                                  <a>₹485</a>
                          </div>
                   </div>
           </section>
           </div> 

           <div className='container'>
            <div className='termAnd'>
               <span> Terms & Conditions</span>
            </div>
          </div>

      </>
    )
  }
}
