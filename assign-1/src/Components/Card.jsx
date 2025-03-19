import React from 'react'
import { GoPencil } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


const Card = ({ name, lastInvoice, image }) => {

    return (
        <div className=' flex  w-full'>
            <div className='flex justify-between py-3 px-4 items-center w-9/12 border-b-2 border-r-2'>
                <div className='flex gap-3 items-center'>
                    <img src={image} className='h-[40px] w-[40px] rounded-full'></img>

                    <h1>{name}</h1>
                </div>

                <p>{lastInvoice}</p>
            </div>
            <div className='flex justify-center items-center w-3/12 border-b-2'>

                <GoPencil />
                <FaRegEye />
                <BsThreeDotsVertical />
            </div>

        </div>
    )
}

export default Card
