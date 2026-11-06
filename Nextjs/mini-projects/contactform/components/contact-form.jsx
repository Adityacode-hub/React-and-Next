"use client";
import Form from "next/form";
import { submitUser } from '../../actions/actions'
export default function ContactForm({action}){
return(
   <div>
         <h1>
           Register User
         </h1>
         <Form action={action}>
           <input 
           type="text"
           name="name"
           placeholder="enter your name"
           required
           />
           <input type='email'
           name='email'
           placeholder='enter your email'
           required/>
           <button type='submit'>
               Submit
           </button>
         </Form>
        <div >
           <h1 classname="px-4 py-3 rounded font-bold text-1xl text-center text-red-400">
               Search Forms
           </h1>
    <Form action={"/search"}>
    <input
    type="text"
    name="query"
    placeholder="Search post id"
    ></input>
    <button type="submit">Submit</button>
    </Form>
        </div>
       </div>
)
}
export default function ContactPage()
{
    return <ContactForm action={creatContact}/>
}