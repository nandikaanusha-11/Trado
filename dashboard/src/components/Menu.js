import React,{useState} from "react";

import {Link} from "react-router-dom";


const Menu = () => {
   const [selectedMenu,setselectedMenu]=useState(0);
   const [isProfileDropDown,setisProfileDropDown]=useState(false);

   const handleMenuClick=(index)=>{
     setselectedMenu(index);
   }

   const handleProfileClick=(index)=>{
     setisProfileDropDown(!isProfileDropDown);
   }

   const menuClass="menu";
   const activeMenuClass="menu selected";

  return (
   <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" 
            onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="https://trado-1-j98g.onrender.com/orders" 
            onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="https://trado-1-j98g.onrender.com/holdings" 
            onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="https://trado-1-j98g.onrender.com/positions" 
            onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="https://trado-1-j98g.onrender.com/funds" 
            onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu===4? activeMenuClass:menuClass}>Fundings</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="https://trado-1-j98g.onrender.com/apps" 
            onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu===5 ? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
