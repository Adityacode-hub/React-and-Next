import {z} from "zod";
import { updateTodoSchema } from "@/lib/validators/todoSchema";
import { connectDB } from "../../../../lib/db";
import Todo from "../../../../lib/models/Todo";
import { NextResponse } from "next/server";
import { todoSchema } from "../../../../lib/validators/todoSchema";
import mongoose from "mongoose";

export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return NextResponse.json({
            success:false,
            message:"Invalid Todo ID"},
            {status:400
        })
    }
    const body = await req.json();
   const validateData=updateTodoSchema.parse(body);
    if (Object.keys(validateData).length === 0) {
      return NextResponse.json(
        { success: false, message: "No fields provided" },
        { status: 400 }
      );
    }
    const todo = await Todo.findByIdAndUpdate(
      id,
      validateData,
      { new: true, runValidators: true }
    );

    if (!todo) {
      return NextResponse.json(
        { success: false, message: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Todo Updated Successfully",
      todo
    });

  } catch (error) {
  if(error instanceof z.ZodError)
  {
      return NextResponse.json({
      success: false,
      message: "Validation Failed",
      errors:error.issues
    }, { status: 500 });
  }
  }
}


export async function DELETE(req,{params})
{
    try{
        await connectDB();
        const {id}=await params;
          if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid Todo ID" },
        { status: 400 }
      );
    }
        const tododelete= await Todo.findByIdAndDelete(id);
         if (!tododelete) {
      return NextResponse.json({
        success: false,
        message: "Todo not found"
      }, { status: 404 });
    }
        return NextResponse.json({
            success:true,
            message:"Deleted successfully",
            tododelete
        },{status:200}
    )

    }catch(error)
    {
        return NextResponse.json({
            status:false,
            message:error.message
            
        },{status:500}

        )
    }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
     if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid Todo ID" },
        { status: 400 }
      );
    }
    const body=await req.json();
    const validatedData=todoSchema.parse(body)
    const todo = await Todo.findOneAndReplace(
      { _id: id },
      validatedData,
      { returnDocument:"after", runValidators: true }
    );
    if (!todo) {
      return NextResponse.json(
        { success: false, message: "Todo not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Todo replaced successfully",
      todo
    });
  }catch (error) 
  {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues
        },
        { status: 400 }
      );
    }
    return NextResponse.json({
        success:false,
        message:error.message
    },{status:500}
)
  }
}