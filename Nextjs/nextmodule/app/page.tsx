
// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   async function updatePerson() {
//     try {
//       setMessage("Updating...");

//       const res = await fetch(`/api/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           age: Number(age),
//           email,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Update failed");
//       }

//       setMessage(JSON.stringify(data, null, 2));
//     } catch (error) {
//       setMessage(
//         error instanceof Error
//           ? error.message
//           : "Something went wrong"
//       );
//     }
//   }

//   return (
//     <main>
//       <h1>Update Person</h1>

//       <input
//         placeholder="Enter Person ID"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />

//       <br /><br />

//       <input
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Enter Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={updatePerson}>
//         Update Person
//       </button>

//       <pre>{message}</pre>
//     </main>
//   );
// }

"use client"
import { usePathname } from "next/navigation";
export default function Home(){
  const pathname=usePathname();
  

  return(
<>
<h1>Current Pathname:{pathname}</h1>
</>
  )
}