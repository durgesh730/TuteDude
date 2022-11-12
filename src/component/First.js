import React, { Component } from 'react'
import './First.css'

export default class First extends Component {
  render() {
    return (
      <>
          <div  className='line'>
               <p>{this.props.head}</p>
          </div>
      </>
    )
  }
}
