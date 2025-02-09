
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart , AiOutlineUserAdd} from 'react-icons/ai'
import React from 'react'
import './nav.css'

const Nav = ({query ,handleInputChange}) => {
  return (
    <nav>
        <div className="nav-container">
            <input value={query} onChange={handleInputChange} type="text" className="search-input" placeholder="Enter your search shoes" />
        </div>
        <div className="profile-container">
            <a href="#">
                <FiHeart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>

        </div>
    </nav>
  )
}

export default Nav