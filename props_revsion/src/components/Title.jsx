import React from "react";
 function App()
 {
    return <Card title="React" desc="Frontend Library"/>;
 }
function Card(props)
{
    return(
        <div className="parent">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

 export default App;