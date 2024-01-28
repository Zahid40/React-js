import React, { Component } from 'react'
import loading from '../newsloading.svg'

export default class Loder extends Component {
  render() {
    return (
      <>
       <div className='flex justify-center'>
         <img className='h-12' src={loading} alt="loader" />
       </div>
      </>
    )
  }
}
