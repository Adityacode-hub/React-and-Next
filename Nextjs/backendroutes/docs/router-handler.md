# Next.js Backend / Route Handlers

## 🧠 Sabse pehle ek simple idea

Frontend se hum backend ko request bhejte hain.

Example:

GET /api/todos

Backend request receive karta hai
        ↓
Kuch kaam karta hai
        ↓
Response bhejta hai

Frontend ← Response ← Backend


Next.js mein backend API banane ke liye:

app/api/.../route.js

`route.js` special file hai.

---

# 1. Route Handler kya hai?

Route Handler = Next.js mein backend API banane ka tarika.

Example:

app/
└── api/
    └── hello/
        └── route.js

Iska URL hoga:

/api/hello

Agar browser mein:

http://localhost:3000/api/hello

open kiya, toh Next.js `route.js` ko run karega.

---

# 2. GET kya hai?

GET ka simple meaning:

> "Bhai mujhe data de."

Example:

export async function GET() {
  return Response.json({
    message: "Hello from Backend"
  });
}

Browser:

GET /api/hello

Backend:

{
  "message": "Hello from Backend"
}

---

# 3. HTTP Methods

Backend mein mostly ye methods use karenge:

GET
POST
PUT
PATCH
DELETE

Inko aise yaad karo:

GET
→ Mujhe data chahiye

POST
→ Naya data banana hai

PUT
→ Pura data replace karna hai

PATCH
→ Data ka thoda part change karna hai

DELETE
→ Data delete karna hai


### Ek example

Socho Todo app hai.

GET
→ Saare todos dikhao

POST
→ Naya todo banao

PUT
→ Todo ko completely replace karo

PATCH
→ Todo ka sirf completed status change karo

DELETE
→ Todo delete karo

---

# 4. IMPORTANT: Method ka naam exact hona chahiye

Ye:

export async function GET() {}

✅ Correct

Ye:

export async function Get() {}

❌ Wrong

Ye:

export async function get() {}

❌ Wrong


Next.js ko exact uppercase naam chahiye.

GET
POST
PUT
PATCH
DELETE

---

# 5. POST

POST ka matlab:

> "Bhai, ye naya data hai. Isko create kar."

Example:

export async function POST(request) {

  const body = await request.json();

  return Response.json({
    message: "Todo created",
    todo: body
  });

}

Agar Postman se bheja:

POST /api/todos

Body:

{
  "title": "Learn Next.js",
  "completed": false
}

Backend ko body milegi:

{
  "title": "Learn Next.js",
  "completed": false
}

---

# 6. request kya hai?

`request` = client ne backend ko jo request bheji hai.

Example:

export async function POST(request) {

}

Yahan `request` ke andar request ki information hoti hai.

Hum usme se:

- body
- URL
- headers

etc. nikal sakte hain.

---

# 7. request.json() kya karta hai?

POST/PUT/PATCH mein frontend/Postman JSON data bhej sakta hai.

Example:

{
  "title": "Learn Next.js",
  "completed": false
}

Isko read karne ke liye:

const body = await request.json();

Ab:

body

ke andar ye data aa jayega:

{
  "title": "Learn Next.js",
  "completed": false
}

Phir:

const { title, completed } = body;

---

# 8. Response.json() kya hai?

Backend ko frontend ko answer dena hai.

Uske liye:

Response.json()

Example:

return Response.json({
  message: "Todo created successfully"
});

Matlab:

Backend → Frontend

"Ye lo bhai, tumhara response."

---

# 9. GET + External API

Hum apne backend ke andar kisi doosri API ko bhi call kar sakte hain.

Example:

export async function GET() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const data = await res.json();

  return Response.json({
    data
  });

}

Flow:

Client
  ↓
/api/hello
  ↓
Next.js Backend
  ↓
JSONPlaceholder API
  ↓
Data
  ↓
Client

---

# 10. Query Parameter

Ab important concept.

Query parameter = URL ke andar extra information.

Example:

/api/todos?completed=true

Yahan:

completed=true

query parameter hai.

Simple:

?key=value

---

# 11. Multiple Query Parameters

Example:

/api/todos?completed=true&limit=5

Yahan:

completed = true

limit = 5

`&` ka matlab:

> Ek aur parameter aa raha hai.

---

# 12. Query Parameter kyun use karte hain?

Mostly:

Filter:

/api/todos?completed=true

Search:

/api/products?search=shoes

Limit:

/api/products?limit=10

Pagination:

/api/products?page=2&limit=20

Sort:

/api/products?sort=price

Simple yaad rakho:

> Query parameter ka use data ko filter/search/sort/customize karne ke liye hota hai.

---

# 13. Query Parameter kaise read karein?

Example URL:

/api/hello?name=Aditya

Code:

export async function GET(request) {

  const url = new URL(request.url);

  const searchParams = url.searchParams;

  const name = searchParams.get("name");

  return Response.json({
    name
  });

}

Result:

{
  "name": "Aditya"
}

---

# 14. Ye 3 lines samjho

const url = new URL(request.url);

Meaning:

> Request se URL nikaal lo.

---

const searchParams = url.searchParams;

Meaning:

> URL ke `?` ke baad wali information nikaal lo.

---

const name = searchParams.get("name");

Meaning:

> `name` naam ka parameter mujhe de do.

---

# 15. URLSearchParams {} kyun dikhta hai?

Agar tum:

/api/hello

hit karoge:

URLSearchParams {}

kyunki URL mein koi query parameter nahi hai.

Lekin:

/api/hello?name=Aditya

hit karoge:

searchParams

ke andar:

name = Aditya

hoga.

---

# 16. Dynamic Route

Ab maan lo hume specific Todo chahiye.

Example:

/api/todos/10

Yahan:

10

Todo ki ID hai.

Iske liye folder:

app/
└── api/
    └── todos/
        └── [id]/
            └── route.js

`[id]` ka matlab:

> ID badal sakti hai.

Isliye:

/api/todos/1

/api/todos/2

/api/todos/50

sab isi route se handle ho sakte hain.

---

# 17. params kya hai?

Dynamic URL ki value `params` mein milti hai.

URL:

/api/todos/25

Folder:

[id]

Code:

export async function GET(request, { params }) {

  const { id } = await params;

  return Response.json({
    id
  });

}

Result:

{
  "id": "25"
}

---

# 18. request vs params

Ye confusion mat karna.

### request

Client ne kya bheja?

Example:

request.json()

→ Body

request.url

→ URL


### params

URL ke dynamic part ki value.

Example:

/api/todos/25

↓

params.id

↓

"25"


Simple:

request
→ Request ki information

params
→ `[id]` ki value

---

# 19. Collection Route vs Individual Route

Ye structure yaad kar lo:

app/
└── api/
    └── todos/
        ├── route.js
        └── [id]/
            └── route.js


### `/api/todos`

Collection hai.

GET
→ Saare todos

POST
→ Naya todo


### `/api/todos/10`

Specific Todo hai.

GET
→ Todo 10

PUT
→ Todo 10 replace

PATCH
→ Todo 10 update

DELETE
→ Todo 10 delete

---

# 20. PUT

PUT ka matlab:

> "Pura resource replace/update kar."

Example:

PUT /api/todos/10

Body:

{
  "title": "Learn Next.js",
  "completed": true
}

Code:

export async function PUT(request, { params }) {

  const { id } = await params;

  const body = await request.json();

  return Response.json({
    id,
    ...body
  });

}

---

# 21. PATCH

PATCH ka matlab:

> "Bhai sirf thoda data change karna hai."

Example:

PATCH /api/todos/10

Body:

{
  "completed": true
}

Humne title ko touch nahi kiya.

Sirf:

completed

change kiya.

Memory:

PUT
→ Pura replace

PATCH
→ Thoda update

---

# 22. DELETE

DELETE ka matlab:

> "Is resource ko delete kar."

Example:

DELETE /api/todos/10

Code:

export async function DELETE(request, { params }) {

  const { id } = await params;

  return Response.json({
    message: `Todo ${id} deleted successfully`
  });

}

---

# 23. Complete API Structure

app/
└── api/
    └── todos/
        ├── route.js
        └── [id]/
            └── route.js


### route.js

/api/todos

GET
→ All todos

POST
→ Create todo


### [id]/route.js

/api/todos/1

GET
→ One todo

PUT
→ Replace todo

PATCH
→ Partially update todo

DELETE
→ Delete todo

---

# 24. Dynamic Route vs Query Parameter

VERY IMPORTANT.

### Dynamic Route

/api/todos/123

`123` tells us:

> Kaunsa todo?

Folder:

[id]

---

### Query Parameter

/api/todos?completed=true

`completed=true` tells us:

> Kis type ke todos chahiye?

So:

Dynamic route
→ Resource identify karta hai

Query parameter
→ Resource ko filter/customize karta hai

---

# 25. Dono ek saath bhi aa sakte hain

Example:

/api/todos/123?details=true

Yahan:

123
→ Dynamic parameter

details=true
→ Query parameter

So:

URL
│
├── /123
│    └── params
│
└── ?details=true
     └── searchParams

---

# 26. Postman mein kaise test karein?

### GET

Method:

GET

URL:

http://localhost:3000/api/todos

Body:

Nothing


### POST

Method:

POST

URL:

http://localhost:3000/api/todos

Body → raw → JSON

{
  "title": "Learn Next.js",
  "completed": false
}


### PUT

Method:

PUT

URL:

http://localhost:3000/api/todos/1

Body:

{
  "title": "Learn Next.js Properly",
  "completed": true
}


### PATCH

Method:

PATCH

URL:

http://localhost:3000/api/todos/1

Body:

{
  "completed": true
}


### DELETE

Method:

DELETE

URL:

http://localhost:3000/api/todos/1

Body:

Nothing

---

# 27. Common Errors

## 405 Method Not Allowed

Example:

GET /api/hello

But route mein sirf:

POST

hai.

Next.js bolega:

405

Meaning:

> Route toh hai, lekin ye HTTP method available nahi hai.

---

## "No HTTP methods exported"

Usually method ka naam galat hai.

Wrong:

export async function Get() {}

Correct:

export async function GET() {}

---

## 404 Not Found

Meaning:

> Ye route mila hi nahi.

Example:

/api/abcd

lekin:

app/api/abcd/

exist hi nahi karta.

---

# 28. console.log() kahan dikhega?

Route Handler backend/server par run hota hai.

Isliye:

console.log()

ka output normally browser console mein nahi,

terminal mein dikhega.

Example:

console.log(searchParams);

Run:

bun dev

Terminal mein output dekho.

---

# 29. Sab kuch ek table mein

| Cheez | Simple Meaning |
|---|---|
| GET | Data lao |
| POST | Naya data banao |
| PUT | Pura data replace karo |
| PATCH | Data ka kuch part change karo |
| DELETE | Data hatao |
| request | Client ki request |
| request.json() | Request body padho |
| request.url | Request ka URL |
| params | Dynamic URL value |
| searchParams | `?` ke baad wali values |
| Response.json() | Client ko JSON response bhejo |
| `[id]` | Dynamic route |

---

# 30. 🧠 Sabse Important Mental Model

Agar tum ye samajh gaye,
toh Route Handlers ka basic concept samajh gaye.

Client:

"GET /api/todos/10?details=true"

                    ↓

              Next.js Route

                    ↓

        ┌─────────────────────┐
        │ request             │
        │                     │
        │ URL                 │
        │ Body                │
        │ Headers             │
        └─────────────────────┘

                    ↓

              params

              id = 10

                    ↓

           searchParams

           details = true

                    ↓

             Backend Logic

                    ↓

          Response.json(...)

                    ↓

                Client


# 31. 🔥 10-Second Revision

GET
→ Data lao

POST
→ Data banao

PUT
→ Pura replace

PATCH
→ Thoda update

DELETE
→ Delete


request
→ Request ki information

params
→ `[id]` ki value

searchParams
→ `?` ke baad ki value

request.json()
→ Body padho

Response.json()
→ Response bhejo


Dynamic:

/todos/10

→ params.id


Query:

/todos?limit=10

→ searchParams.get("limit")


That's it.