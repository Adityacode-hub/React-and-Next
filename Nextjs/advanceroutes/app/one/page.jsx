import Link from "next/link";
import React from 'react'

const Firstpage = () => {
  return (
    <>
    <div className='flex  justify-center px-3 py-4 text-red-600 hover:text-yellow-400 '>
        <Link href={'/one/two'}>Redirected to two second page</Link>
     
    </div>
    <div className='flex justify-center px-3 py-4 text-green-700 hover:text-blue-800'>
         <Link href={'/three'}>Redirected to three page</Link>
    </div>
   </>
  )
}

export default Firstpage