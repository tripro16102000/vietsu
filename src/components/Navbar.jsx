import React from "react";
import logo from "../img/logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useState } from "react";
const Navbar = () =>{
  const [bgColor, setBgColor] = useState(false)
  const changeBgColor = () =>{
    if(window.scrollY >0){
      setBgColor(true)
    }else{
      setBgColor(false)
    }
  }
  window.addEventListener('scroll', changeBgColor);

  return (
    <div className={bgColor ? 'navbar active' : 'navbar'}>
      <img className="w-14 mr-2 cur" src={logo} alt="" />
      <div className="w-1/3 nav">
        <ul className="flex justify-around text-gray-200 cursor-pointer text-sm">
          <li className="hover:text-gray-300">GIỚI THIỆU</li>
          <li className="hover:text-gray-300">GALLERY</li>
          <li className="hover:text-gray-300">ĐỐI TÁC</li>
          <li className="hover:text-gray-300">HỎI ĐÁP</li>
          <li className="hover:text-gray-300">LIÊN HỆ</li>
        </ul>
      </div>
      <div className="text-white text-2xl flex w-14 justify-between nav-icon">
        <FaFacebook></FaFacebook>
        <FaYoutube></FaYoutube>
      </div>
      <div id="mobile">
      <i className="fas fa-bars"></i>
     </div>
    </div>
    
   
 
  );
};

export default Navbar;
