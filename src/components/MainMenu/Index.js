import React from 'react'
import './style.scss'

function MainMenu() {
  return (
    <nav className='align_center navbar'> 
      <div className='align_center'>
       <a href='/' className='navbar_header'> TeamFest</a>
          <form className='align_center navbar_form'> 
            <input type='text'
                   placeholder='Search Festival' 
                   className='navbar_search'/>
            <button type='submit' className='search_button'>
                  Search
            </button>
          </form>
        </div>
        <div className='align_center navbar_link'>
        <a href="/" className='align_center link'>
                Home</a>
                <a href="/Catologies/1" className='align_center link'>
                Catologis</a>
                <a href="/Store" className='align_center link'>
                Store</a>
                <a href="/Gallery" className='align_center link'>
                Gallery</a>
                <a href="/Aboutus" className='align_center link'>
                AboutUS</a>
                <a href="/Contact" className='align_center link'>
                Contact</a>
        </div>
    </nav>
  )
}

export default MainMenu