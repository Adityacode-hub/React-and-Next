import Link from 'next/link'
import React from 'react'

const TwoSecondpage = () => {
  return (
    <>
     <div className='flex  items-center px-4 py-3 text-red-500 font-bold'>
         <Link href={`/four`}>Go to Four</Link>
       </div>
      </>
  )
}

export default TwoSecondpage