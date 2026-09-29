
import StateCounter from "./components/StateCounter";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
function App() {
  return (
   
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
         <Navbar/>
        <StateCounter />
        <Controls />
<Posts/>
      </div>
    </div>
  );
}

export default App;



