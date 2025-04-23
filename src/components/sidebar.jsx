//import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
// Correct import (if file is appSlice.js)
import { setOpen } from '../redux/appSlice'



const sidebarItems =[
    {
        icon:<LuPencil size={"26px"} />,
        title:"inbox"
    },
    {
        icon:<IoMdStar size={"26px"} />,
        title:"Starred"
    },
    {
        icon:<MdOutlineWatchLater size={"26px"} />,
        title:"Snoozed"
    },
    {
        icon:<TbSend2 size={"26px"} />,
        title:"Sent"    

    },
    {
        icon:<MdOutlineDrafts size={"26px"} />,
        title:"Drafts"
    },
    {
        icon:<MdOutlineKeyboardArrowDown size={"26px"} />,
        title:"More"
    },

]

export const Sidebar = () => {
    const dispatch = useDispatch();

  return (
    <div className = 'w-[15%]'>
        <div className = 'p-3'>
        <button onClick={() => dispatch(setOpen(true))} className = 'flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-amber-300 cursor-pointer'>
            <LuPencil size={"26px"} />
            Notelet
            </button>
        </div>
        <div className = 'text-gray-500'>
            {
                sidebarItems.map((item,index) => {
                    return (
                    <div key={index} className = 'flex items-center gap-4 pl-6 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                        {item.icon} 
                        <p>{item.title}</p>

                    </div>
                )
            })
            }
            
          

        </div>

    </div>
  )
}
export default Sidebar