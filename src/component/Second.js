import React, { Component } from 'react';
import './Second.css';
import {TbCurrencyRupee } from 'react-icons/tb';

export default class Second extends Component {
  render() {
    return (
      <>
           <div className='toParts'>
               <div className="card">
                 <div className="card-body ">
                    <div className='sectiontp'>
                       <span className="card-text">Referral Earning</span>
                       <div className='d-flex'>
                            <div className='rupicon'><a><TbCurrencyRupee/></a></div> 
                         <small className='card-text'>2,500</small>
                       </div>
                    </div>

                    <div className='sectiontp'>
                       <span className="card-text">Total Referrals</span>
                       <small className='card-text'>7</small>
                    </div>

                    <div className='sectiontp'>
                       <span className="card-text">Wallet Balance</span>
                       <div className='d-flex'>
                            <div className='rupicon'><a><TbCurrencyRupee/></a></div> 
                         <small className='card-text'>500</small>
                       </div>
                    </div>
                 </div>

                 <div className='textBottom'>
                   <a className="card-text bottomText">Withdraw Balance</a>
                 </div>
               </div>
  
           <div className='Referral'>
              <span className="card-text">Your Refferral Code</span>
              <small className='card-text'>EDCH54</small>
           </div>

           </div>
      </>
    )
  }
}
