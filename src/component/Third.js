import React, { Component } from 'react'
import { BsPeopleFill,BsFillTagFill } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { AiFillWallet } from 'react-icons/ai';
import { CiPercent } from 'react-icons/ci';
import './Third.css'; 

export default class Third extends Component {
  render() {
    return (
      <>
      <div className='container heading'>
          <span>How does it work ?</span>
      </div>

      <div className='container'>
      <div className='FiveDiv'>
           <div className='InviteFriends d-flex'>
                  <div className='InviteIcon '>
                       <span><BsPeopleFill/></span>
                  </div>
                  <div className='InviteText'>
                        <span>Invite you Friends</span>
                        <small>Share the link tutedude.com with your friends</small>
                  </div>
           </div>

           <div className='InviteFriends d-flex'>
                  <div className='InviteIcon '>
                       <span><BsFillTagFill/></span>
                  </div>
                  <div className='InviteText'>
                        <span>Friend purchases any course </span>
                        <small>Using your REFERRAL CODE in the payments page</small>
                  </div>
           </div>

           <div className='InviteFriends d-flex'>
                  <div className='InviteIcon '>
                       <span><FaRupeeSign/></span>
                  </div>
                  <div className='InviteText'>
                        <span>You get ₹ 200 as referral money</span>
                        <small>On total purchase the friend makes, into your wallet</small>
                  </div>
           </div>

           <div className='InviteFriends d-flex'>
                  <div className='InviteIcon '>
                       <span><CiPercent/></span>
                  </div>
                  <div className='InviteText'>
                        <span>Your Friend gets ₹ 200 Off </span>
                        <small>On his overall fee on successful purchase using your referral code </small>
                  </div>
           </div>

           <div className='InviteFriends d-flex'>
                  <div className='InviteIcon '>
                       <span><AiFillWallet/></span>
                  </div>
                  <div className='InviteText'>
                        <span>Transfer money from wallet </span>
                        <small>When the wallet balance reaches ₹200 or more, you can withdraw it</small>
                  </div>
           </div>
        </div>
      </div>
      </>
    )
  }
}
