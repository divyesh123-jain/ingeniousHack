import React from 'react'

type prop = {
    parameter: string,
    value: number | string
}

const CustomRow = ({ parameter, value }: prop) => {
    return (
        <div className='grid grid-cols-2 grid-rows-1 p-[.5px]'>
            <div className='grid place-items-center'>{parameter}</div>
            <div className='bg-white grid place-items-center h-8 rounded-lg'>{value}</div>
        </div>
    )
}

export default CustomRow