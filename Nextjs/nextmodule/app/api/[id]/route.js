
import connectDB from "../../lib/db";
import Person from "../../lib/models/Person";
import { NextResponse } from "next/server";
//FOR UPDATING
import  {redirect}  from "next/navigation";
export async function PUT(req,{params})
{
 try{
     console.log("PUT REQUEST RECEIVED");
     await connectDB();
     const {id}=await params;
     const body=await req.json();
     const person=await Person.findByIdAndUpdate(id,body,{new:true,runValidators:true})
     if(!person)
     {
        return NextResponse.json({error:"Person not Found"},
            {status:404}
        );
        redirect("/home");
     }
     return NextResponse.json(person);
 }
  catch(error)
  {
    console.error("PUT Eroor",error);
    return NextResponse.json({error:"Failed to update person"},
        {status:500}
    )
  }
}