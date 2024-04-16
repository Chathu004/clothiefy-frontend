
import { Fragment, useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import './Navigation.css'


export default function Navigation() {
  const [menu,setMenu] = useState("shop");

  return (
  
   <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>CLOTHY</p>
    </div>
    <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
      <button>Login</button>
      <img src={cart_icon} alt="" />
      <div className="nav-cart-count">0</div>
    </div>
   </div>



  //  17.31
   


    
   
  )
}



// import React from 'react';
// import { Grid, AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function Navigation() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           onClick={handleClose}
//         >
//           <MenuItem>Home</MenuItem>
//           <MenuItem>Women</MenuItem>
//           <MenuItem>Men</MenuItem>
//           <MenuItem>Kids</MenuItem>
//           <MenuItem>hi</MenuItem>
//           <MenuItem>Stores</MenuItem>
//           <MenuItem>Sign In</MenuItem>
//           <MenuItem>Create Account</MenuItem>
//         </Menu>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Your Company
//         </Typography>
//         <Button color="inherit">Sign In</Button>
//         <Button color="inherit">Create Account</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }
