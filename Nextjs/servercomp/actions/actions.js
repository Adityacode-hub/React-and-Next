"use server";
// async function createTodo(formData) 
// {
//     const title = formData.get("title");

//     console.log("creating a todo:", title);
//   };
//   export default createTodo;
//this is the createtodo of the formdata
//this is the client  request to be given

// export async function updateTodo(id,title,desc,isCompleted)
// {
//  try{
//    const newData={
//     id:id,
//     title:title ,
//     desc:desc,
//     isCompleted:isCompleted
//   }
//   return {
//     success:true,
//     message:"update successfully"
//     data:newData,
//   }
//  }
//  catch(error)
//  {
//   console.log("Error in updating todo",error)
//   return{
//     success:false,
//     message:"Failed to up date"
//   }
//  }
// }
export async function submitUser(formData)
{
  const name=formData.get("name");
  const email=formData.get("email");
  console.log("Name",name);
  console.log("Email",email);
}
