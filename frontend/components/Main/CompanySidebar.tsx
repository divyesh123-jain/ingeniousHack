import { useRouter } from 'next/router'
import React , {useEffect,useState} from 'react'
import { BsApple, BsMessenger } from 'react-icons/bs'
import CustomRow from './CustomRow'
import RadarChart from './RadarChart'
import { getDataByName } from '@/api'
import obj from '@/Types/Data'

const CompanySidebar = () => {
    const router = useRouter()
    const {slug} = router.query

    useEffect(() => {
        fetchdata()
      }, [slug])
    
      const fetchdata = async () => {
        const res: obj = await getDataByName(slug)
        setData(res)
        console.log(res)
      }
    
    
      const [data, setData] = useState<obj | null>(null)
  return ( 
    data&&
    <div className='h-full flex flex-col p-4 px-6 w-[400px]'>
        <div className="w-full h-[200px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PDGEziuP2my8b4HL9cAhFdnQaQ2qu73I0Ck83gDe&s')] grid place-items-center bg-cover rounded-xl text-white">
            <BsMessenger className='text-[5rem]' />    
        </div>        
        <p className='self-center text-xl font-semibold mt-7'>
            {slug}
        </p>
        <div className='w-full h-[300px]'>
            <RadarChart MapData = {data} />
        </div>
        <div className='bg-stone-100 w-full mt-7 flex flex-col gap-2 p-2 rounded-lg'>
            <CustomRow parameter='Domain' value={data?.Domain} />
            <CustomRow parameter='Sales Growth' value={data?.Sales_Growth.toString() + "%"} />
            <CustomRow parameter='Profit Growth' value={data?.Profit_Growth.toString() + "%"} />
        </div>
    </div>
  )
}

export default CompanySidebar