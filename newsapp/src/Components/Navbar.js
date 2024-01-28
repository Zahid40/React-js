import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import logo from "../newsapplogo.svg"
import { Link } from 'react-router-dom'



export class Navbar extends Component {
  // static propTypes = {

  // }

  render() {

    return (
      <>
        <div className='h-auto w-full bg-white p-4 flex items-center justify-between p-4'>
          <div className='flex items-center'>
            <img src={logo} className="mr-2 h-10 sm:h-9" alt="logo" />
            <p className='text-sm font-medium'>NovaBriefs</p>
          </div>
          <ul className=' p-2'>
            <li className='p-2'><Link to="/">General</Link></li>
            <li className='p-2'><Link to="world">World</Link></li>
            <li className='p-2'><Link to="nation">Nation</Link></li>
            <li className='p-2'><Link to="business">Business</Link></li>
            <li className='p-2'><Link to="technology">Technology</Link></li>
            <li className='p-2'><Link to="entertainment">Entertainment</Link></li>
            <li className='p-2'><Link to="sports">Sports</Link></li>
            <li className='p-2'><Link to="science">Science</Link></li>
            <li className='p-2'><Link to="health">Health</Link></li>
          </ul>
          <div className='flex items-center'>
            <span className="material-symbols-outlined menu_btn">menu</span>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar
