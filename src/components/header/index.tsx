import React,{useState} from 'react'
import "./header.scss"


const Header = () => {


  return (

    <>
   
    <div className='header-main-div'>
     <div className='header-left-div'>
      <i className='fa fa-arrow-left'/>
      <div>Saree</div>
     </div>
      <div className='header-right-div'>
      <i className='fa fa-search'/>
      <i className="fa fa-heart"/>
      <i className="fa fa-shopping-cart"/>
      </div>

    </div>
    </>
  )
}

export default Header