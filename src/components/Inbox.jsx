import React from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Messages from './Messages'
import { useState } from 'react';




const mailType = [
    {
        icon:<MdInbox size={"20px"} />,
        title:"Primary",
    },
    {
        icon:<GoTag size={"20px"} />,
        title:"Promotions",
    },
    {
        icon:<FaUserFriends size={"20px"} />,
        title:"Social",
    },
]

export const Inbox = () => {
    const [mailTypeSelected, setMailTypeSelected] = useState(0);
  return (
    <div className = 'flex-1 bg-white rounded-xl mx-5'>
        <div className = 'flex items-center justify-between px-4'>
            <div className = 'flex items-center gap-2 text-gray-700 py'>
                <div className = 'flex items-center gap-1'>
                    <MdCropSquare size={"20px"} />
                    <FaCaretDown size={"20px"} />

                </div>
                <div className = 'p-2 rounded-full bg-gray-100 hover:cursor-pointer hover:bg-gray-300'>
                    <IoMdRefresh size={"20px"} />

                </div>
                <div className = 'p-2 rounded-full bg-gray-100 hover:cursor-pointer hover:bg-gray-300'>
                    <IoMdMore size={"20px"} />
                    
                </div>

            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm text-gray-400'>1-50 of 1000</p>
                <button className='hover:rounded-full hover:bg-gray-100 cursor-pointer'>
  <MdKeyboardArrowLeft size="26px" />
</button>

<button className='hover:rounded-full hover:bg-gray-100 cursor-pointer'>
  <MdKeyboardArrowRight size="26px" />
</button>
            </div>

        </div>
        <div className = 'h-[90vh] overscroll-y-auto'>
            <div className = 'flex items-center gap-1'>
                {
                    mailType.map((item,index)=> {
                        return (
                            <button
                                key={index}
                                className = {`${mailTypeSelected === index? 'border-b-4 border-b-amber-500 text-amber-500' :'border-b-4 border-b-transparent' }flex items-center gap-5 p-4 w-52  hover:cursor-pointer hover:bg-gray-100 `}
                                onClick={() => setMailTypeSelected(index)}>
                                {item.icon}
                                <span>{item.title}</span>
                                </button>
                                
                        )
                    })

                }
                </div>
                <Messages />

            </div>


    </div>
  )
}
export default Inbox