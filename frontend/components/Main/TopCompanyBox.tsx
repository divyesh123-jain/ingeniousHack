import React from 'react'
import Link from 'next/link'
import { IoLogoLinkedin } from 'react-icons/io'

type prop = {
    name:string,
    percentage:number
}

const TopCompanyBox = ({name,percentage}:prop) => {
  return (
    <Link href = {`/company/${name}`} className='h-[140px] flex items-center pl-[2rem] gap-2 rounded-xl  bg-stone-100'>
    <IoLogoLinkedin className='text-[4rem]' />
    <div className='flex flex-col'>
        <p className='text-xl font-semibold'>{name}</p>
        <p>{percentage}</p>
    </div>
</Link>
  )
}

export default TopCompanyBox