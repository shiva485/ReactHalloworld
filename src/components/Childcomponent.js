import React from 'react'

function Childcomponent(props){
    return(
        <div>
         <button onClick={props.greethand}>parent</button>
        </div>
    )

}
export default Childcomponent