// import createTodo, { updateTodo } from "../actions/actions";

// export default function Home() {
//   return (
//     <div className="p-4">

//       {/* Create Todo */}
//       <form action={createTodo}>
//         <input
//           name="title"
//           placeholder="Enter your todo"
//         />
//         <button type="submit">Create Todo</button>
//       </form>

//       {/* Update Todo */}
//       <button
//         onClick={async () => {
//           const result = await updateTodo(
//             "101",
//             "Learn Next.js",
//             "Practice Server Actions",
//             true
//           );

//           console.log(result);
//         }}
//       >
//         Update Todo
//       </button>

//     </div>
//   );
// }
import Link from "next/link";
const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-amber-600 lg:w-1/3 lg:mb-0 mb-4">
            Master Cleanse Reliac Heirloom
          </h1>

          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
            
              <img
                alt="Gallery image"
                className="w-full object-cover h-full object-center block"
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=687&auto=format&fit=crop"
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Gallery image"
                className="w-full object-cover h-full object-center block"
                src="https://images.unsplash.com/photo-1779572859129-f1fbc5547a29?q=80&w=687&auto=format&fit=crop"
              />
            </div>

            <div className="md:p-2 p-1 w-full">
              <img
                alt="Nature landscape"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop"
              />
            </div>
          </div>

          {/* Right gallery */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="Gallery image"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              
              <img
                alt="Gallery image"
                className="w-full object-cover h-full object-center block"
                src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Gallery image"
                className="w-full object-cover h-full object-center block"
                src="https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?q=80&w=688&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
   
    <Link  href={'/about'} className="text-3xl font-bold text-green-900 underline"  >
    Go to About Page
    </Link>

    </section>
  );
};

export default Home;
