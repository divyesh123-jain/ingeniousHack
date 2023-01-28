import { getDataBySearch } from '@/api'
import List from '@/components/Main/List'
import obj from '@/Types/Data'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [data,setData] = useState<obj[]>([])
    const router = useRouter()
    const {domain}= router.query
    useEffect(()=>{
        if(domain!==undefined)
        {getData()}
    },[domain])

    const getData =async ()=>{
        const res = await getDataBySearch(domain)
        setData(res)
        console.log(res)
    }
    if(data?.length===0) return (
    <div className='grid place-items-center w-full'>No Results</div>
  )
        return(
            <div className='w-full'>
                <List data = {data} />
            </div>
        )
}

export default Search