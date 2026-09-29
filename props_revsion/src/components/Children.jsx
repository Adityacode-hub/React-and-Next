import React from "react";
//this is the parent the children will show what parent will pass
function App()
{
    return(
        <>
        <Card title="animated card">
            <p>THIS IS THE ANIMATED CARD</p>
        </Card>
         <Card title="animated card2">
            <p>THIS IS THE ANIMATED CARD</p>
        </Card>
        </>
    )

}
//this is the children 
 function Card({title,children})
 {
    return(
        <div  style={{border:"1px solid black",padding:"10px"}}>
        <h2>{title}</h2>
        {children}
        </div>  
    )
 }
export default App;