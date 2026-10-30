import connectDB from "../lib/db";
import Person from "../lib/models/Person"
import { NextResponse } from "next/server";
//GET METHOD TO GET ALL THE DATA
export async function GET(req) {
  try {
    await connectDB();

    const persons = await Person.find({}, "name");

    return NextResponse.json(persons);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
//this is the POST method
export async function POST(req) {
  try {
    console.log("POST request received");

    await connectDB();
    console.log("Database connected");

    const body = await req.json();
  //  console.log("Request body:", body);

//DATABASE MEI SAVE KARNA

    const person = await Person.create(body);
  //  console.log("Person created:", person._id);
//THIS IS THE SUCCESS RESPONSE
    return NextResponse.json(person, { status: 201 });
  } catch (error) {
    console.error("Actual POST error:", error);

    return NextResponse.json(
      {
        error: error.message,//ERROR MESSAGE KYA H
        name: error.name,//ERROR KA TYPE FROM THE MONGOSERVER
      },
      { status: 500 }//
    );
  }
}
