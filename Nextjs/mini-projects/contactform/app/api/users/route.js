import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import {NextResponse} from "next/server";
export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req)
{
    try
    {
        await connectDB();
        const body=await req.json();
        const user=await User.create(body);
        return NextResponse.json(user,{status:201,});
    }
    catch(error)
    {
        return NextResponse.json(
            {message:error.message},
            {status:500}
        )
    }
}
