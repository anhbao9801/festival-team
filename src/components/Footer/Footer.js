import React from 'react'
import './style.scss'
function Footer() {
  return (
    <div className='wraper_div'>
      <div className='wraper_div1'>
        <ul>
          <p>Site Map</p>
          <a href='/'><li>Home Page</li></a>
          <a href="/Catologies/1"><li>Catologies</li></a>
          <a href="/Store"><li>Store</li></a>
          <a href="/Gallery"><li>Gallery</li></a>
          <a href="/Aboutus"><li>About US</li></a>
          <a href="/Contact"><li>Contact</li></a>
        </ul>
        <div className='wraper_div11'>
          <ul> 
            <p>Catologies</p>
            <a href='/catology/1'><li>Culture Festival</li></a>
            <a href='/catology/2'><li>Regions Festival</li></a>
            <a href='/catology/3'><li>Flower Festival</li></a>
            <a href='/catology/4'><li>Music and art Festival</li></a>
            <a href='/catology/5'><li>Some other Festival</li></a>
            <a href='/Catologies/1'><li>All Festival</li></a>
          </ul>
        </div>
      </div>
      <div className='wraper_div2'>
          <a href='/' className='navbar_header'> TeamFest</a>
          <p>FOLLOW US ON</p>
          Welcome to the official website of Viet Nam National Authority . Visit our social media pages for more festival inspiration.
      </div>
    </div>
  )
}

export default Footer