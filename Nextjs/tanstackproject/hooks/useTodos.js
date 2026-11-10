import{useQuery} from "@tanstack/react-query"
import {  getTodos } from "../lib/api/todos"

export function useTodos(){
   return useQuery({
    queryKey:["todos"],
    queryFn:getTodos,
   })
}
