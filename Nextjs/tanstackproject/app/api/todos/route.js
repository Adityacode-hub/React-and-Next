import {connectDB} from "../../../lib/db";
import Todo from "../../../lib/models/Todo";
import { todoSchema } from "../../../lib/validators/todoSchema";
import { NextResponse } from "next/server";
export  async function GET()
{

 try{
    await connectDB();
    const todos=await Todo.find();
    return NextResponse.json({
        success:true,
        todos
    })


 }catch(error)
 {
    return NextResponse.json({
        success:false,
        message:"Failed to fetch todos",
        error:error.message
    },
{status:500}
)
 }

}

export async function POST(req) {
   
   try
   {
    await connectDB();
    const body=await req.json();
    const validateData=todoSchema.parse(body)
    const todo = await Todo.create({
  ...validateData
});

//console.log(todo);
return NextResponse.json({
    success:true,
    message:"Added Successfully",
    todo:todo,
})


   }catch(error)
   {
       return NextResponse.json({
        success:"false",
        message:"Failed to add",
        error:error
       },
    {status:500})
   }  
}