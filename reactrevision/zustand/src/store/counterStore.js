import {create} from 'zustand'

export const useCountStore=create((set)=>
({
count:0,
increaseCount:()=>set((state)=>({count: state.count+1})),
decreaseCount:()=>set((state)=>({count:state.count-1})),
removeAllCount:()=>set({count:0}),
updateCounts:(newCounts)=>set({count:newCounts}),
reset:()=>set({count:0})
}))