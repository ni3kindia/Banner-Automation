import React from 'react';
const EditTemplate =({parentCallback,value})=>
{ 
    console.log("parentCallback---",parentCallback)

    return (
        
  
       <input value={value} onChange={parentCallback} />
           
    )


}
export default EditTemplate