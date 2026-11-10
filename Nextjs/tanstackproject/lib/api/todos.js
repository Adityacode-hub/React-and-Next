export async function getTodos() {
  const res = await fetch("/api/todos", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  const data = await res.json();

  return data;
}

export async function createTodo(todo)
{
    const res=await fetch("/api/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(todo),
    })
    if(!res.ok)
    {
        throw new Error("failed to create todo");
    }
    return await res.json();
}

export async function deleteTodo(id)
{
    const res=await fetch(`/api/todos/${id}`,{
        method:"DELETE",
    });
    if(!res.ok)
    {
        throw new error("Failed t0 delete todo")
    }
    return await res.json();
}

export async function updateTodo(id,updatedData)
{
    const res=await fetch(`/api/todos/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedData)
    });
    if(!res.ok)
    {
        throw new Error("failed to update todo")
    }
    return await res.json();
}