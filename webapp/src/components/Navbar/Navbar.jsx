import { NavLink, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import './Navbar.css';
import UserContext from '../../context/User/UserContext';


const Navbar = () => {

    const {user} = useContext(UserContext)
    
    const NavLinks = useMemo(()=> [
        {
            id:1,
            title:"Home",
            link:'/home',
            icon:IoMdHome,
            color:"#84cc16",
        },
        {
            id:2,
            title:"Suggest",
            link:'/suggestion',
            icon:FaLightbulb,
            color:"#eab308",
        },
        {
            id:3,
            title:"Help",
            link:'/help',
            icon: MdLiveHelp,
            color:"#3b82f6",
        },
    ])
    
    const [navbarOpen, setNavbarOpen] = useState(false)

    const onNavbarClick = () => {
        setNavbarOpen((prev)=>!prev)
        console.log(navbarOpen)
    }

    const onLogout = () => {
    }

  return (
    <div className='navbar-container'>
        <div className='burger-menu-logo'>
            <div></div>
            <div className='second'></div>
        </div>
        {/* <div className='navbar-display-name uppercase font-semibold text-[16px]'>
            Hi, {user.firstname}
        </div> */}
        <div className='relative' style={{color:"#3B3B3B"}}>
            <div className='absolute top-[-5px] right-[22px] w-[22px] text-xs text-white bg-red-500 flex items-center justify-center rounded-full'>
                4{/* ---------------Notification------------------ */}
            </div>
            <GoBellFill style={{fontSize:"22px"}} />
        </div>



    </div>
  )
}

export default Navbar