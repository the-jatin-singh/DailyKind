import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import './Navbar.css';


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const NavLinks = [
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
    ]

    const onNavbarClick = () => {
        setNavbarOpen((prev)=>!prev)
        console.log(navbarOpen)
    }

    const onLogout = () => {
    }

  return (
    <div>
        <div className="top-navbar">
            <nav className='flex justify-between px-3 py-2'>
                <h1>DailyKind</h1>
                <div className='flex items-center gap-10'>
                    {NavLinks.map((link)=>(
                            <NavLink to={link.link} key={link.id}>{link.title}</NavLink>
                    ))}
                </div>
                <button onClick={onLogout} className=''>Logout</button>
            </nav>
        </div>
        <div className="side-navbar text-white">
            <div className="side-navbar-main ">
                <div className={`side-navbar-main-content fixed ${navbarOpen ? "left-0":"left-[-160px]"} `}>
                    <div onClick={onNavbarClick} className='burger-menu cursor-pointer '>
                        <div className={`burger-menu-bar one transition-transform duration-300 ${navbarOpen ? "transform rotate-[-45deg] translate-y-[7px] ": ""} `}></div>
                        <div className={`burger-menu-bar two transition-transform duration-300 ${navbarOpen ? "hidden" : ""}`}></div>
                        <div className={`burger-menu-bar three transition-transform duration-300 ${navbarOpen ? "transform rotate-45 translate-y-[-9px] ": ""} `}></div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl pt-4 px-2'>Hi, Jatin</h1>
                        <p className='pl-2'>extra extra</p>
                        <div className='flex flex-col gap-2 p-2 mt-4'>
                            {NavLinks.map((link)=>(
                                <div key={link.id} className=' flex  items-center gap-1 px-2 py-1'>
                                    {React.createElement(link.icon, { style: { color: link.color } })}
                                    <NavLink className='px-4 py-1 rounded-md' to={link.link} key={link.id}>{link.title}</NavLink>
                                </div>
                            ))}
                        </div>
                        <button  onClick={onLogout} className='m-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition-transform duration-300 '>Logout</button>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar