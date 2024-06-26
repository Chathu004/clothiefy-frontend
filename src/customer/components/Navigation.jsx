
import { Fragment, useState } from 'react'
// import logo from '../../assets/logo.png'
import logo from '../../assets/PANDORA 4.png'
import cart_icon from '../../assets/cart_icon.png'
import './Navigation.css'
import { Link } from 'react-router-dom'


export default function Navigation() {
  const [menu,setMenu] = useState("shop");

  return (
  
   <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>PANDORA</p>
    </div>
    <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">0</div>
    </div>
   </div>
   
  )
}

