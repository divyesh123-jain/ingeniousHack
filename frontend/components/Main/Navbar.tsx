import React from 'react'
import { MdDarkMode } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import {GrFormNextLink} from 'react-icons/gr'

const Navbar = () => {
    return (
        <div className='w-full h-[120px]'>
            <div className="flex justify-between border-b px-2 max-w-[1300px] py-4 w-full mx-auto items-center">
                <a href = {'/'} className='text-[3rem] font-bold'>Gro</a>
                <div className='bg-stone-200 w-[400px] gap-2 px-4 rounded-xl flex items-center h-[60px]'>
                    <AiOutlineSearch />
                    <input type="text" className='input' />
                    <GrFormNextLink />
                </div>
                <div className='flex gap-2 items-center'>
                    <MdDarkMode />
                    <CgProfile className='ml-2 text-3xl' />
                    <div className="flex flex-col">
                    <p className='font-semibold'>Akash Sharma</p>
                    <p className='text-xs'>Invester</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar