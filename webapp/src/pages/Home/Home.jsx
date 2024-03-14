import { useContext, useState } from 'react';
import UserContext from '../../context/User/UserContext';
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineRemoveDone } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import './Home.css';

const Home = () => {

  const { data } = useContext(UserContext)

  const [mainContainerOpen, setMainContainerOpen ] = useState(false);

  const onMainContainerClick = () => {
    setMainContainerOpen(prev=>!prev);
  }

  return (
    <div className='home-container'>

      <div onClick={onMainContainerClick} className='main-container relative shadow-md transition duration-300'>

        <h1>{data.title}</h1>

        <div style={{ height: mainContainerOpen ? 'auto' : '0px' }} className='hidden-main'>
          <p>{data.description}</p>
          <div className='hidden-main_button'>
            <div className='hidden-main_button-done'>done</div>
            <div className='hidden-main_button-skip'>skip</div>
          </div>
        </div>

        <div>
          <FaCaretDown className={`ml-auto ${mainContainerOpen ? 'rotate-180' : ''}`} /> 
        </div>
      </div>

      {/* HOT */}
      <div className='HOT'>

        <div className='item daily-streak shadow-md flex items-center gap-[3vw]'>

          <div className='daily-streak-icon'>
            {/* icon for daily streak */}
          </div>

          <div style={{width:"100%"}}>
            <h2 className='text-[20px] font-semibold'>Daily Streak</h2>
            <div className='daily-streak-table'>
                <div className="row">
                  <div className="cell">MON</div>
                  <div className="cell">TUE</div>
                  <div className="cell">WED</div>
                  <div className="cell">THU</div>
                  <div className="cell">FRI</div>
                  <div className="cell">SAT</div>
                  <div className="cell">SUN</div>
                </div>
                <div className="row">
                  <div className="cell icon"><div><IoMdDoneAll className='true' /></div></div>
                  <div className="cell icon"><div><IoMdDoneAll className='true' /></div></div>
                  <div className="cell icon"><div><MdOutlineRemoveDone className='false' /></div></div>
                  <div className="cell icon"><div><IoMdDoneAll className='true' /></div></div>
                  <div className="cell icon"><div><IoMdDoneAll className='true' /></div></div>
                  <div className="cell icon"><div><MdOutlineRemoveDone className='false' /></div></div>
                  <div className="cell icon"><div><IoMdDoneAll className='true' /></div></div>
                </div>
            </div>
          </div>

        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>

        <div className='item shadow-md'>
          <div className=''>
          </div>
          <div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home