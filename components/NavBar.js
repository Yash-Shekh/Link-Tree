"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const pathName = usePathname()
    const showNavBar = ["/", "/generate"].includes(pathName)
    return (<>        {showNavBar && <nav className='bg-white w-[90vw] p-3 my-8 mx-[5vw] rounded-full fixed top-2 flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
            <Link href={"/"}><img className='w-30 mx-5'
                src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                alt="logo image" />
            </Link>
            <ul className='flex items-center font-semibold gap-3 text-black'>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Products</li></Link>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Templates</li></Link>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Marketpalce</li></Link>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Learn</li></Link>
                <Link href={"/"}><li className='hover:bg-gray-200 p-3 rounded-xl'>Pricing</li></Link>
            </ul>
        </div>
        <div className='flex gap-4'>
            <button className='p-5 px-8 text-black bg-gray-200 rounded-xl text-lg font-bold'>Log in</button>
            <button className='p-5 text-white bg-black rounded-full text-lg font-bold'> Sign up free</button>
        </div>
    </nav>}
    </>

    )
}

export default NavBar
