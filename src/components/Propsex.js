import React from 'react';

const Propsex=(props)=>{
console.log(props)
return(
    <div>
<h1>Hallo props   {props.id} {props.name}  </h1>
{props.children}
    </div>

)

}

export default Propsex





