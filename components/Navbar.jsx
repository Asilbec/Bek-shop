import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import logoIcon from '../public/logo.png'
import Image from 'next/image'
import { useStateContext} from '../context/StateContext';
import { Cart } from './';

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();


  function removeandshow(){
    setShowCart(true)
    document.getElementById('main-container').classList.add("disablez");
  }

  return (
    <div className="navbar-container">
            <p className="logo">
        <Link href="/">
          <Image alt='Logo' height={35}  width={35} src={logoIcon}/>
        </Link>
      </p>
      <div className='navbar-container-first'>
      <div className="logos">
        <Link href="/">
         <p>Shoes</p>
        </Link>
      </div>
      <div className="logos">
        <Link href="/">
         <p>Apperal</p>
        </Link>
      </div>
      <div className="logos">
        <Link href="/">
         <p>Mission</p>
        </Link>
      </div>
      </div>
      <button type="button" onClick={() => {removeandshow()
      }} className="cart-icon" >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar