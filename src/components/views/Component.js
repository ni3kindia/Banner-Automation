//import React  from "react";

//import Componentdata from "./Componentdata";

const Component =({data,index}) =>
{
    return(
        <>
<div>

{data[index].map(item=>(

    <div>
        <p>{item.component}</p>
        </div>

))}





        </div></>
    );

};

export default Component;