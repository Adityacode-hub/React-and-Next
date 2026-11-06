import { NextResponse } from "next/server";
import { connect } from "node:http2";

export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const user = await User.findByIdAndUpdate(
      id,
      { $set: body },
      {
        new: true,
        runValidators: true//this is the important concept od the mongoose
      }
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request,{params}) {
    try{
        await connectDB();
        const {id}=await params;
        const user=await  User.findByIdAndDelete(id);
        if(!user)
        {
            return NextResponse.json({
                message:"User not found"
                
            },
       {status:404}
        );
        }
        return NextResponse.json({message:"User deleted Succesffully"},
            {status:200}
        ) ;
    }
    catch(error)
    {
        return NextResponse.json(
            {message:error.message},
            {status:500}
        );
    }
   
    
}