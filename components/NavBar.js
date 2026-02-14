"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname()
    const showNavBar = ["/", "/generate"].includes(pathName)
    return (<>        {showNavBar && <nav className='bg-white md:w-[90vw] w-[40vh] p-3 my-4 md:my-8  rounded-full fixed top-2 flex items-center justify-between mx-5 md:mx-[10vh] z-50 shadow-lg'>
        <div className='flex gap-2 md:gap-5 items-center'>
            <Link href={"/"}><img className='w-20 md:w-30 mx-2 md:mx-5'
                src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                alt="logo image" />
            </Link>
            <ul className='hidden md:inline-flex items-center font-semibold gap-3 text-black'>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Home</li></Link>
                <Link href={"/About"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Learn More</li></Link>
                <Link href={"/Contact"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Contact</li></Link>
            </ul>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <Link href={"/generate"}><button className='hidden md:block py-1 px-4 md:py-3 md:px-4 text-black bg-gray-200 rounded-lg text-lg font-bold'>Try Now</button></Link>
            <Link href={"/generate"}><button className='md:hidden py-1 px-4 md:py-3 md:px-4 text-black bg-gray-200 rounded-lg text-lg font-bold'>Try</button></Link>
            <Link href={"https://github.com/Yash-Shekh/Link-Tree"}><button className='py-1 px-4 md:py-3 md:px-5 text-white bg-black rounded-full text-lg font-bold'> GitHub</button></Link>
            <button onClick={() => setOpen(!open)} className='md:hidden'><img className='w-6 h-6' src="/hamburger.svg" alt="menu icon" /></button>
            <div
                className={`fixed top-0 right-0 h-full w-55 bg-white text-black font-bold list-none shadow-lg transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <nav className="p-6  space-y-4 flex flex-col justify-start items-start text-lg">
                    <button onClick={() => setOpen(!open)} className='md:hidden'><img className='w-6 h-6 mx-5' src="/cancel.svg" alt="menu icon" /></button>
                    <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Home</li></Link>
                    <Link href={"/About"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Learn More</li></Link>
                    <Link href={"/Contact"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Contact</li></Link>

                </nav>
            </div>
        </div>
    </nav>}
    </>

    )
}

export default NavBar
