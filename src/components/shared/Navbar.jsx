import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdTune } from "react-icons/md"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { setSearchText, setUser } from '../../redux/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { AnimatePresence,motion} from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';







export const Navbar = () => {
  const [input,setInput] = useState("");
  const [toggle,setToggle] = useState(false);

  const {user} = useSelector(store => store.appSlice);

  const dispatch = useDispatch();
  const SignOutHandler= () =>{
    signOut(auth).then(() => {
      dispatch(setUser(null));

    }).catch((err)=> {
      console.log(err);

    })

  }
  useEffect(() => {
    dispatch(setSearchText(input))
  },[input])
  return (
    <div className='flex items-center justify-between px-6 h-20'>
      <div className='flex items-center gap-6'>

        {/* Hamburger Icon */}
        <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
          <RxHamburgerMenu size={"26px"} className='text-gray-800' />
        </div>

        {/* Logo and Brand Name */}
        <div className='flex items-center gap-3'>
          <img
            className='w-14 h-13 bg-[#fff8f0] p-0 rounded'
            src="/images/image.png"
            alt="logo"
          />
          <h1 className='text-2xl font-extrabold text-[#434c5e] tracking-wide'>
            Inboxify
          </h1>
        </div>

      </div>
      <div className = 'md:block hidden w-[50%] mr-60'> 
      
<div className="flex items-center bg-[#EAF1FB] px-4 py-2 rounded-full w-full max-w-2xl">
  <IoIosSearch size={20} className="text-gray-700 mr-3" />
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Search mail"
    className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
  />
  <MdTune
    size={20}
    className="text-gray-700 ml-3 cursor-pointer hover:text-gray-900"
  />
</div>
       


      </div>
      <div className ='md:block hidden'>
      <div className='flex items-center gap-2'>
        <div className = 'p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <LuMessageCircleQuestion size= {"24px"} />
        </div>
        <div className = 'p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoSettings size= {"24px"} />
        </div>
        <div className = 'p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <TbGridDots  size= {"24px"} />
            </div>
            <div className = 'relative cursor-pointer'>
            <Avatar onClick={() => setToggle(!toggle)} src={user?.photoURL} sx={{ width: 40, height: 40 }} />

                <AnimatePresence>
                  {
                    toggle && (
                      <motion.div
                        initial = {{opacity: 0, scale: 0.8}}
                        animate = {{opacity: 1,scale: 1}}
                        exit={{duration: 0.1}}
                        className = 'absolute right-2 z-20 shadow-lg bg-white rounded-md'
                        >
                          <p onClick = {SignOutHandler} className = 'p-2 underline'>LogOut</p>
                      </motion.div>
                    )


                  }
                </AnimatePresence>

            </div>
           
            </div>

      </div>
    </div>
  );
};

export default Navbar;