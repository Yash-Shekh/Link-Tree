"use client"
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react'

const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()


    // const [Link, setLink] = useState("")
    // const [LinkText, setLinkText] = useState("")
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [Handle, setHandle] = useState(searchParams.get('handle'))
    const [Pic, setPic] = useState("")
    const [Desc, setDesc] = useState("")

    const handleChange = (index, field, value) => {
        setlinks(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        )
    }


    const addlink = () => {
        setlinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async (text, link, handle) => {

        router.push(`/${Handle}`)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "handle": Handle,
            "pic": Pic,
            "desc": Desc,
            "links": links
        });

        console.log(raw)

        const requestOptions = {
            headers: myHeaders,
            redirect: "follow",
            method: "POST",
            body: raw
        };

        // fetch("http://localhost:3000/api/add", requestOptions)
        //     .catch((error) => console.error(error));
        //     .then((result) => console.log(result))
        //     .then((response) => response.text())

        const res = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await res.json()
        toast(result.message)
        setlinks([])
        setHandle("")
        setPic("")

    }

    return (

        <section className="bg-[#e9c0e9] min-h-screen grid grid-cols-2">

            <div className='w-[60vw] bg-white mt-40 ml-20 my-15 rounded-2xl flex flex-col justify-center items-center py-5'>
                <h1 className='text-black text-5xl font-bold'>Welcome to LinkTree</h1>


                <div className='flex flex-col gap-3 m-4 w-[40%]'>

                    <p className='text-2xl font-semibold text-black'>Claim your Handle</p>
                    <input value={Handle || ""}
                        onChange={e => { setHandle(e.target.value) }}
                        className='text-black bg-gray-100 px-4 py-1 rounded-lg'
                        type="text" placeholder='Choose the Handle' />

                    <p className='text-2xl font-semibold text-black'>Add Links</p>

                    {links && links.map((item, index) => {
                        return <div key={index} className='w-full flex gap-2'>
                            <input
                                value={item.linktext}
                                onChange={e => handleChange(index, "linktext", e.target.value)}
                                className='text-black bg-gray-100 px-4 py-1 rounded-lg w-full'
                                type="text" placeholder='Enter link text' />
                            <input
                                value={item.link}
                                onChange={e => handleChange(index, "link", e.target.value)}
                                className='text-black bg-gray-100 px-4 py-1 rounded-lg w-full'
                                type="text" placeholder='Enter link' />

                        </div>
                    })}

                    <button
                        onClick={() => addlink()}
                        className='p-3 text-white bg-[#502274] rounded-full 
                    text-md font-semibold'>+ Add More Link</button>

                    <p className='text-2xl font-semibold text-black'>Add Picture and Finalize</p>
                    <input
                        value={Pic || ""}
                        onChange={e => { setPic(e.target.value) }}
                        className='text-black bg-gray-100 px-4 py-1 rounded-lg'
                        type="text" placeholder='Enter link to your picture' />
                    <input
                        value={Desc || ""}
                        onChange={e => { setDesc(e.target.value) }}
                        className='text-black bg-gray-100 px-4 py-1 rounded-lg'
                        type="text" placeholder='Enter Description' />

                    <button
                        disabled={Pic == "" || Handle == "" || links[0].linktext == ""}
                        onClick={() => { submitLinks() }}
                        className='disabled:bg-red-500  p-3 text-white bg-[#502274] rounded-full text-md font-semibold'>Create your Link Tree</button>
                </div>
                <ToastContainer />
            </div>
            <div className='flex justify-end w-full '>
                <img className=' h-screen' src="/generate.png" alt="" />
            </div>
        </section>

    )
}

export default page 
