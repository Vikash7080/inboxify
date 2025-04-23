import React from 'react';
import { Navbar } from './components/shared/Navbar';

import { Sidebar } from './components/sidebar';

import Body from './components/Body'; 
import Inbox from './components/Inbox'; 
import Mail from './components/Mail';   
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import Login from './components/Login'; // 👈 make sure the path is correct


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "mail/:id",
        element: <Mail />
      }
    ]
  }
]);

const App = () => {
  const {user} = useSelector(store=>store.appSlice);
  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      {
        !user ? (
          <Login/>
        ): (
          <>
          <Navbar />
          <RouterProvider router={router} />
          <div className='absolute w-[30%] bottom-0 right-20 z-10'>
            <SendMail />
          </div>
          </>

        )
      }
     
    </div>
  );
};

export default App;
