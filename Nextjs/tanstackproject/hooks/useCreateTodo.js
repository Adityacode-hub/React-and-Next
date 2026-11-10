"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/lib/api/todos";
export function useCreateTodo(){
       const queryClient=useQueryClient();
       const mutation=useMutation({
        mutationFn:createTodo,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["todos"],
            })
        }
       })
       return mutation;
}