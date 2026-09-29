import React from 'react'

export default async function Dynamicroutes({params}){
    const {userid}=await params;
    return(
        <>
        <div>{userid}</div>
        </>
    )
}