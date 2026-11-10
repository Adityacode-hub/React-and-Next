import{useMutation,useQueryClient} from "@tanstack/react-query"
import { updateTodo } from "../lib/api/todos"

export function useUpdateTodo(){
    const queryClient=useQueryClient();
    const mutation=useMutation({
        mutationFn:({id,updatedData})=>updateTodo(id,updatedData),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["todos"],
            })
        }
    })
    return mutation;
}
