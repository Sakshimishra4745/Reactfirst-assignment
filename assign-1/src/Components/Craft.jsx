import React from 'react'
import Card from './Card'
import { LuLayoutGrid } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
const Craft = (props) => {
    const data = props.data;
    return (
        <div className=' w-6/12 mt-10'>
            <div className='flex  justify-end gap-2 items-center'>
                <button className='bg-orange-500 h-[40px] w-[120px] shadow-md'>Register</button>
                <button className='border border-black h-[40px] w-[120px] shadow-md'>Export</button>
                <button className='flex flex-row border border-black h-[40px] w-[120px] items-center  shadow-md gap-3'>layout
                    <LuLayoutGrid />
                </button>
            </div>
            <br></br>
            <div className='flex justify-between w-full'>
                <div className='flex justify-between py-3 px-4 items-center w-9/12 border-b-2 border-r-2'>
                    
                    <p className='my-2 flex gap-2 items-center'><IoIosContact className='text-3xl' />Customer</p>
                    <p className='my-2 flex gap-2 items-center'><IoDocumentTextSharp className='text-2xl' /> lastInvoice</p>
                </div>
                <div className='flex justify-center items-center w-3/12 border-b-2'>
                    <p>Active</p>
                </div>
                
            </div>
            <div className='w-full'>
                
                {
                    data.map((data, key) => (
                        <Card {...data} key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export default Craft
