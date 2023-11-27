import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <h3 id='title'>
      This is my product Page
    </h3>
    <nav className='nav-bar'>
        <Link className='link' to="shirts">Shirts</Link>
        <Link className='link' to="jeans">Jeans</Link>
    </nav>
    <Outlet/>

    </>
  )
}

export default Products
