'use server'
import { cookies, headers } from "next/headers";

export async function GET(request) {
  const reqHeader = await headers();

  const cookieStore = await cookies();

  // Set cookie
  //cookieStore.set("username", "Anuj");

  const theme=cookieStore.set("theme","dark");
  //this is the method to delete the cookies
     cookieStore.delete('username',"Anuj")
  console.log(theme);
  
  // Read cookie
  const username = cookieStore.get("username");

  console.log(username);

  // Read request header
  console.log(reqHeader.get("user-agent"));

  return new Response("<h1>Hello October</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });
}

//this is one method and the another method would be
//export async function GET(request){
 //   const reqHeaders=new Headers(request.headers)
   // console.log(reqHeaders.get("Authorization"))
   //return new Response("Hello Coder")
//}

