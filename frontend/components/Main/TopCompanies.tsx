import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import TopCompanyBox from './TopCompanyBox'
import obj from '@/Types/Data'

const TopCompanies = ({ data }:{data:obj[]}) => {
    console.log(data)
    return (
        <div className='py-4 mt-4 flex flex-col gap-8'>{data && <>
            <h3 className='text-xl font-semibold'>Top Companies</h3>
            <div className='grid grid-cols-3 gap-8 grid-rows-1'>

                {data.map((d)=><TopCompanyBox key = {d.Name} name={d.Name} percentage={d.Profit_Growth} />)}
                
                {/* <TopCompanyBox name="FaceBook" percentage={5} />
                <TopCompanyBox name="Instagram" percentage={8} /> */}


            </div></>}
        </div>

    )
}

export default TopCompanies