"use server"

import connectDB from "@/lib/db";
import User from "@/models/User";
export async function createContact(formdata)
{
    const name=formdata.get("name");
    const email=formdata.get("email");
    const mobile=formdata.get("mobile");
    const address=formdata.get("address");
    await connectDB();
    await User.create({name,email,mobile,address});
    console.log("User registered Successfully");
}