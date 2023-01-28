import CustomRow from '@/components/Main/CustomRow'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { BsApp, BsApple, BsChat, BsFacebook, BsLinkedin, BsMessenger } from 'react-icons/bs'
import obj from '@/Types/Data'
import { getDataByName} from '@/api'


const Company = () => {
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    fetchdata()
  }, [slug])

  const fetchdata = async () => {
    const res = await getDataByName(slug)
    setData(res)
    console.log(res)
  }


  const [data, setData] = useState<obj|any>({})


  return (
    <div className='w-full p-8 border-l'>
      <h2 className='text-xl font-semibold'>{slug}</h2>
      <div className='mt-4 bg-stone-100 h-[200px] w-full rounded-xl flex items-center'>
        <div className='w-[500px] h-full grid place-items-center'>
          <BsMessenger className='text-[5rem]' />
        </div>
        <p className='font-[500] p-3 md:pr-10'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur officiis necessitatibus, expedita nulla exercitationem vero natus laborum aliquid ipsa, vitae pariatur earum non velit odio accusantium quae nisi porro illum?
        </p>

      </div>

      <div className='w-full grid grid-cols-2 gap-3'>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer" className='bg-stone-100 mt-4 h-[50px] rounded-xl flex items-center justify-center gap-2'>
          <BsLinkedin /> Linkedin Link
        </a>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer" className='bg-stone-100 mt-4 h-[50px] rounded-xl flex items-center justify-center gap-2'>
          <BsChat /> Chat
        </a>
      </div>

      <h2 className='text-xl mt-4 font-semibold'>Statistics</h2>
      <div className='-mt-8 grid grid-rows-1 gap-4  grid-cols-2'>
        <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
          <CustomRow parameter='Funding' value={data?.Funding} />
          <CustomRow parameter='Market Cap' value={data?.Market_Cap} />
          <CustomRow parameter='Enterprise Value' value={data?.Enterprise_Value} />
        </div>
        <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
          <CustomRow parameter='Revenue' value={data?.Revenue} />
          <CustomRow parameter='Tax' value={data?.Tax} />
          <CustomRow parameter='Profit' value={data?.Profit} />
        </div>

      </div>
      <h2 className='text-xl font-semibold my-4 mt-6'>Spending Analysis</h2>
      <div className='-my-8'></div>
      <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
        <CustomRow parameter='R&D' value={data?.RD_Spend} />
        <CustomRow parameter='Marketing' value={data?.Marketing_Spend} />
        <CustomRow parameter='Administration' value={data?.Administration} />
      </div>
      <div></div>
    </div>
  )
}

Company.CompanyLayout = (page: ReactNode) => {
  return (
    { page }
  )
}

export default Company
