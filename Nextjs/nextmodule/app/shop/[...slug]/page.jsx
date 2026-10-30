"use client";

import { useParams, usePathname } from "next/navigation";

export default function ShoppingTagItem() {
    const params = useParams();
     const pathname=usePathname();
    console.log(params);

    return (
        <div>
            
            <p>{params.slug.join(" / ")}</p>
           <p>Shopping Page by ID :{pathname}</p> 
           
        </div>
    );
}