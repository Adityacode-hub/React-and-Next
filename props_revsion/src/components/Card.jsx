import React from "react";

function Card({children})
{
    return <div className="card">{children}</div>;
}
//header

Card.Header=function({children})
{
    return<div className="card-header">{children}</div>
}

Card.Body=function({children})
{
    return<div className="card-body">{children}</div>
}

Card.Footer=function({children})
{
    return<div className="card-footer">{children}</div>
};

export default Card;