import React from "react";

export default function App()
{
return(
    <div>
        <User name='Aditya' age={21}/>
        <User name='Anuj' age={22}/>
    </div>
);
}

function User({name ,age})
{
return (
    <div className="parent">
        <h1>{name}</h1>
        <p>{age}</p>
    </div>
);
}
