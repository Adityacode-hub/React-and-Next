"use server";

import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { revalidatePath } from "next/cache";

export async function createContact(formdata) {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const mobile = formdata.get("mobile");
  const address = formdata.get("address");

  await connectDB();

  await User.create({
    name,
    email,
    mobile,
    address,
  });

  revalidatePath("/");
}

export async function updateStatus(id) {
  await connectDB();

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        status: "resolved",
      },
    },
    {
      returnDocument: "after",
    }
  );

  console.log("Updated User:", updatedUser);

  revalidatePath("/");
}