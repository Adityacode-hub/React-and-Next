NEXT.JS ROUTE HANDLER — REQUEST HEADERS & RESPONSE HEADERS
============================================================


1. HEADERS KYA HOTE HAIN?
--------------------------

HTTP headers extra information hoti hai jo request aur response ke saath
travel karti hai.


Request Headers
Client  →  Server

Response Headers
Server  →  Client


COMMON HEADERS
--------------

User-Agent
Authorization
Content-Type
Accept
Cache-Control



2. REQUEST HEADER
-----------------

import { headers } from "next/headers";

export async function GET() {
    const reqHeaders = await headers();

    console.log(reqHeaders.get("user-agent"));

    return new Response("Hello Coder");
}


FLOW
----

Client
  ↓
Request
  ↓
Request Headers
  ↓
Next.js Route Handler
  ↓
Read Headers



3. headers()
-------------

import { headers } from "next/headers";


Then:

const reqHeader = await headers();


Specific header read karne ke liye:

reqHeader.get("user-agent");


Complete Example:

import { headers } from "next/headers";

export async function GET() {
    const reqHeaders = await headers();

    console.log(reqHeaders.get("user-agent"));

    return new Response("Hello Coder");
}


User-Agent request header client/browser ke baare mein information
provide karta hai.



4. REQUEST HEADERS KO request.headers SE READ KARNA
----------------------------------------------------

Request object ke andar bhi headers available hote hain.


export async function GET(request) {

    const reqHeaders = new Headers(request.headers);

    console.log(reqHeaders.get("Authorization"));

    return new Response("Hello Coder");
}


FLOW
----

request
   ↓
request.headers
   ↓
new Headers(...)
   ↓
reqHeaders.get(...)



5. REQUEST HEADER VS RESPONSE HEADER
------------------------------------

Request Header
Client  →  Server


Response Header
Server  →  Client



6. RESPONSE HEADER
------------------

Response headers server se client ko bheje jaate hain.


Example:

export async function GET() {

    return new Response("<h1>Hello October</h1>", {
        headers: {
            "content-type": "text/html",
        },
    });

}


Yahan:

content-type: text/html

ek Response Header hai.


Ye browser ko batata hai ki response HTML format mein hai.



7. REQUEST + RESPONSE HEADER COMPLETE EXAMPLE
----------------------------------------------

import { headers } from "next/headers";

export async function GET() {

    // Request Header
    const reqHeaders = await headers();

    const userAgent = reqHeaders.get("user-agent");

    console.log("User Agent:", userAgent);


    // Response Header
    return new Response("<h1>Hello October</h1>", {
        headers: {
            "content-type": "text/html",
        },
    });

}



8. REQUEST HEADERS KE COMMON EXAMPLES
-------------------------------------

User-Agent
    ↓
Browser/client ke baare mein information


Authorization
    ↓
Authentication token/credentials


Content-Type
    ↓
Request body kis format mein hai


Accept
    ↓
Client kis type ka response accept karta hai


Cookie
    ↓
Client ke cookies



9. HEADERS KA MENTAL MODEL
--------------------------

                    REQUEST

Client
  |
  |  Request Headers
  |  - User-Agent
  |  - Authorization
  |  - Content-Type
  |  - Accept
  |
  ↓
Next.js Route Handler
  |
  |  Response Headers
  |  - Content-Type
  |  - Cache-Control
  |  - Set-Cookie
  |
  ↓
Client

                    RESPONSE



10. QUICK REVISION
------------------

Request Headers
= Client → Server


Response Headers
= Server → Client


headers()
= Request headers read karne ke liye


request.headers
= Request object ke headers access karne ke liye


new Headers(request.headers)
= Headers object create karne ke liye


.get("header-name")
= Specific header ki value read karne ke liye


Example:

const reqHeaders = await headers();

reqHeaders.get("user-agent");


OR


const reqHeaders = new Headers(request.headers);

reqHeaders.get("Authorization");



FINAL REMEMBER
--------------

Client
   ↓
Request Headers
   ↓
Server
   ↓
Response Headers
   ↓
Client