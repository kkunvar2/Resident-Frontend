import React from 'react'
import { Navbar } from 'flowbite-react';

const Nav = () => {
  return (
    <>
           
                <Navbar fluid rounded className=''>
                    <Navbar.Brand href="https://flowbite-react.com">
                        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">LW Residential</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <button className='bg-blue-500 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-red-600 focus:'>Logout</button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
               
            
    </>
  )
}

export default Nav
