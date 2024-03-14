import { MdShoppingCart } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-main">
        <MdShoppingCart className="active" />
        <FaShirt />
        <IoSunny />

        </div>
    </div>
  )
}

export default Footer