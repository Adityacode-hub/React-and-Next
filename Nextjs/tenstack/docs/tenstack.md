it automatically handles
API fetching
caching
loading and error states
synchronization of server data

why do we need tanstack query in nextjs(use clinet)
----------------------------------------
clinet side api  fetching
dashboard
infinite scrolling
pagination 
frquently update data
instead of writing repetative fetching logic we use query hooks like useQuery()
it store the fetch data from server


//while useQuery is uesd to fetch data,useMutation is used when we modify data on the server,such as creating updating or deleting records.These operations usually correspond to POST,PUT,PATCH or DELETE requests

//useMutation is a hook that handle server-side changes(mutation) and provides built-in tools to manage loading state,error, and side effect


const mutation=useMutation({
    mutationFn:addUser
})
-----------------------------------
in simple 
------------------------------------
useQuery ->fetch data(GET)
useMutation ->Modify(POST,PUT,DELTE)

Query Invalidation
--------------------------------------
// After a mutation changes on data on the server,cached queries may become outdated.To fix this ,we invalidate the query which marks it as stale and triggers a refetch

const queryClient=useQueryClient();
const mutation=useMutation({
    mutationFn:addTOdo,onSuccess:()=>{
        quweyClient.invalidateQueries({
            queryKey:["todo"]
        });
    }
});


//optimistic ui
---------------
click like -> request ->wait ->ui update
this can feel slow.
otimistic ui update the interface immediately assuming the request will succeed if the request fails the ui rolls back

 * useMutation handles server-side updates,invalidateQueries refreshes outdated data, and optimistic make the ui feel instant and responsive

Hydration is when the server sends ready html browser add React logic to make it interactive

in simple 
   server (prepare the instant noodles)
               -------->     Browser(receives noodles)
                                       |
                                       |----->Hydration(Adds hot water)
                                                 -->Result(Ready to Eat)

without hydration ->noodles exist but are not useable

Hydration error happens when  server html not equal to client html
------------------------------------------------------------
caching stores previously generated data or pages so they can be reused instead of recomputing them again
--------------------------------------------------------------
Goal:
 Faster performance
 Less server load
 Better scalability
-----------------------------------------------------
 without caching:- User Request ->server ->fetch data ->Render Page
-----------------------------------------------------
 with caching
---------------
 User Request -> Cached Result -> Instant Response
 1. Request Memorization
 2. Data caching
 3. Full Router Cache
 4. Router Cache(client side)
