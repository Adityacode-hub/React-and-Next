import{useEffect,useState} from "react"
export default function App()
{
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const handleSubmit=(e)=>{e.preventDefault();
    console.log("Email",email);
    console.log("Password",password);
  }
  return(
<div className="flex min-h-screen items-center justify-center">
  <form onSubmit={handleSubmit}
  className="flex-w-[300px] flex-col gap-4">
    <div className="flex flex-col gap-2">
      
      <label>Email</label>
      
      <input 
      type="email"
      placeholder="enter the email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className="rounded border px-3 py-2"
      />
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <input type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="rounded border px-3 py-2">
        </input>
        <button type="submit" className="rounded bg-black px-4 py-2 text-white">Login</button>
      </div>
    </div>
  </form>
</div>
  )
}