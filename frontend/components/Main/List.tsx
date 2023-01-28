import obj from '@/Types/Data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const List = ({ data }: { data: obj[] }) => {
    const router = useRouter();
    const changePage = (d: string)=>{
        router.push(`/company/${d}`)
    }
    return (

        <div className="relative overflow-x-auto mt-6    rounded-xl">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 rounded-xl">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Revenue
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Profit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((d: obj) => {
                            return (
                    
                                    <tr onClick={()=>changePage(d.Name)} className="bg-white border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                            {d.Name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.Revenue}
                                        </td>
                                        <td className="px-6 py-4">
                                            {d.Profit}
                                        </td>

                                    </tr>
                        
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default List