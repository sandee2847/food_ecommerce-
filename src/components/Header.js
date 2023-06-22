import React from 'react'
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';


function Header() {
    const getData = useSelector((state) => state.cart)

    const handleClick = () => {
        alert("hello world")
    }
    return (
        <div className='max-w-full sticky top-0 flex justify-between h-14 px-20 items-center bg-red-400'>
            <div className='flex flex-row gap-5'>
                <p className='text-2xl'>Add to Cart</p>
                <p className='text-2xl'>Home</p>
            </div>
            <div onClick={handleClick} className='relative bg-pink rounded-full bg-slate-200 hover:bg-slate-500 hover:cursor-pointer p-2'>
                <div className='text-2xl'><BsCart /></div>
                <p className=' bg-blue-400 rounded-full px-2 absolute top-0 left-7'>{getData.length}</p>
            </div>

        </div>
    )
}

export default Header