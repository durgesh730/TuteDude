import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Enrolled from './Enrolled';
import './Fourth.css'; 

export default class Fourth extends Component {
  render() {
    return (
      <>
          <div className='container'>
              <div className='Enrolled'>
                <Link to="/Enrolled" className="card-text">Friends Who Enrolled</Link>
              </div>
          </div>

          <div className='container'>
            <div className='term'>
               <span> Terms & Conditions</span>
            </div>
          </div>
      </>
    )
  }
}
