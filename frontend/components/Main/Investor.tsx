import obj from '@/Types/Data'
import React, { useEffect, useState } from 'react'
import {TiTick} from 'react-icons/ti'
import List from './List'
import TopCompanies from './TopCompanies'
const Investor = () => {

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async() => {
    const res =await getData()
    let arr:string[] = []
    res.map((x:obj)=>{
      if(!arr.includes(x.Domain)) return arr.push(x.Domain)
    })
    console.log(arr)
    setData(res.slice(0,3))
    // console.log(res)
  }

  const [data,setData] = useState([])
  const getData = async () => {
    const res = await fetch(`https://gro-backend.vercel.app/`)
    const result = await res.json()
    return result

  }
  return (
    <>
    <div className='w-full border-l p-8 '>
        <div className='flex gap-6'>
            <div className='bg-stone-100 px-8 flex relative overflow-hidden flex-col justify-center items-start w-[550px] h-[300px] rounded-xl'>
                <h2 className='text-2xl font-semibold'>Total Investment</h2>
                <h1 className='text-[3rem] font-semibold'>$ {10000}</h1>
                <img src="/rocket.png" alt="rocket" className='-rotate-[90deg] -bottom-10 -right-10 absolute' />
            </div>
            <div className='grow bg-black/80 relative overflow-hidden p-8 text-white  rounded-xl'>
                <p className='text-2xl font-semibold'>Looking for new Startups?</p>
                <p className='flex gap-2 items-center mt-5 text-sm '><TiTick />Find new startups and invest in them</p>
                <p className='flex gap-2 items-start text-sm '><TiTick />Promote your own startup and find investors</p>
                <img src="/box.png" alt="box" className='-right-[3rem] h-[200px] absolute' />
            </div>
        </div>
        <TopCompanies data = {data} />
        <List data = {data} />
    </div>
    </>
  )
}

export default Investor