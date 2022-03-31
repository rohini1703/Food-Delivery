import React, { useEffect } from 'react';
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";

const Header = () => {

    useEffect(() =>{
const toggleMenu=document.querySelector(".toggleMenu");
 toggleMenu.addEventListener('click', () =>{
     document.querySelector('.rightMenu').classList.toggle('active');
 })

},[])
  return ( 
     <header>
     <img src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png" alt="" className='logo' />
     <div className="inputBox">
     <SearchRounded className="searchIcon" />
     <input type="text" placeholder="Search" />
     </div>
     <div className="shoppingCart">
         <ShoppingCartRounded className="cart" />
         <div className='cart_content'>
             <p>2</p>
            
             </div>
         
         </div>

         <div className='profileContainer'>
             
             <div className='imgBox'>
                 <img src="https://i.pinimg.com/originals/77/b4/5b/77b45b44e57f5984571e10a1484d3d8b.jpg" alt="" />
                 </div>
 <h2 className='userName'>Rohini Chaudhari</h2>
 </div>
 <div className='toggleMenu'>
<BarChart className='toggleIcon' />

     </div>
  </header>
  );
}

export default Header
