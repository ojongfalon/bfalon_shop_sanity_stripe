import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Farm Products</Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <HiOutlineShoppingCart />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar