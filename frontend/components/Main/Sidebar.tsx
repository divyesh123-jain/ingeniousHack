import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

const Sidebar = () => {
  const[option,setOption] = useState<string | null>(null)
  const [type, setType] = useState<String>("Public")
  const [rating,setRating] = useState<1 | 2 | 3 | 4 | 5>(5)
  const list: string[] = [ "AgriTech", "Health", "Logistics", "Fintech", "Entertainment", "EdTech", "Enterprise" ]
  return (
    <div className='h-full flex flex-col p-4 px-6 w-[400px]'>
      <div className=' flex gap-2 text-xl items-center'>
        <HiMenuAlt2 />
        <h2 className='font-semibold'>Filter</h2>
      </div>

      <div className='mt-[4rem]'>
        <p className='text-md font-semibold'>
          Company Type
        </p>
        <div className='flex gap-4 mt-4'>
          <p className={`filterButton ${type === "Public" ? 'bg-black/80 text-white' : ''}`} onClick={() => setType("Public")} >Public</p>
          <p className={`filterButton ${type === "Private" ? 'bg-black/80 text-white' : ''}`} onClick={() => setType("Private")} >Private</p>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className="text-md font-semibold">Category</h3>
        <div className='text-md flex gap-4 h-[180px] overflow-auto overflow-x-hidden mt-3 flex-col'>
          
          {list.map((category: String) => {
            return (
              <div key = {category.toString()} className='flex pr-3  flex-row-reverse text-sm font-[400] justify-between '>
                <input checked = {option===category.toString()?true:false} onChange={()=>setOption(category.toString())} className='checked:accent-black scale-[1.5]' type="checkbox" id={category.toString()} value={category.toString()} name={category.toString()} />
                <label htmlFor={category.toString()}>{category}</label>
              </div>)
          }
          )}
        </div>
      </div>

      <div className='my-[4rem]'>
        <h3 className='text-md font-semibold'>Investment Range</h3>
        <div className='mt-3 flex flex-col'>
          <input type="range" min="100" max="1000" className='accent-black w-full' />
          <div className="flex justify-between">
            <p>$100</p>
            <p>$1000</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-md font-semibold'>Company Rating</h3>
        <div className='mt-3 flex gap-2'>
          <p className={`filterButton ${rating===1?`bg-black text-white`:''}`} onClick = {()=>setRating(1)}>1</p>
          <p className={`filterButton ${rating===2?`bg-black text-white`:''}`} onClick = {()=>setRating(2)}>2</p>
          <p className={`filterButton ${rating===3?`bg-black text-white`:''}`} onClick = {()=>setRating(3)}>3</p>
          <p className={`filterButton ${rating===4?`bg-black text-white`:''}`} onClick = {()=>setRating(4)}>4</p>
          <p className={`filterButton ${rating===5?`bg-black text-white`:''}`} onClick = {()=>setRating(5)}>5</p>
        </div>
      </div>
          <Link href = {`/company/search?domain=${option}`} className='filterButton hover:bg-black hover:text-white mt-2'>Submit</Link>


    </div>



  )
}

export default Sidebar