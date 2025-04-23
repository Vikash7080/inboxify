import React from 'react'
import { RiStarLine } from 'react-icons/ri'
import { MdCropSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../redux/appSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  }

  // Function to convert Firestore timestamp to JavaScript Date
  const formatDate = (timestamp) => {
    if (timestamp) {
      const date = timestamp?.toDate();  // Ensure it's a Firestore Timestamp object
      return date ? date.toLocaleString() : "No date"; // Format date as a locale-specific string
    }
    return "No date";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={openMail}
      className='flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover: cursor-pointer hover:bg-gray-100'
    >
      <div className='flex items-center gap-3'>
        <div className='flex-none text-gray-400'>
          <MdCropSquare className='w-5 h-5' />
        </div>
        <div className='flex-none text-gray-400'>
          <RiStarLine className='w-5 h-5' />
        </div>
        <div>
          <h1 className='font-semibold'>{email?.to}</h1>
        </div>
      </div>

      <div className='flex-1 ml-4'>
        <p className='text-gray-600 truncate inline-block max-w-full'>{email?.message}</p>
      </div>

      <div className='flex-none text-gray-400 text-sm'>
        <p>{formatDate(email?.createdAt)}</p> {/* Format date here */}
      </div>
    </motion.div>
  );
}

export default Message;