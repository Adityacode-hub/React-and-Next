import { useQueryClient ,useMutation} from "@tanstack/react-query";

import { deleteTodo } from "../lib/api/todos";
export function useDeleteTodo()
{
    const queryClient=useQueryClient();
    const mutation=useMutation({
        mutationFn:({id})=>deleteTodo(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["todos"],
            })
        }
    })
    return mutation;
}