"use client";
import React from 'react'
import {useParams} from 'next/navigation'
const Shope = () => {
    const params=useParams();
    console.log(params);
  return (
    <div>Shope</div>
  )
}

export default Shope