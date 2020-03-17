import React from 'react'
import { Component } from 'react'

{/* functional  component */ }

// function Eventhandling() {
//     function clickHandler() {
//         console.log("button clicked")
//     }
//     return (

//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     )
// }


class Eventhandling extends Component {
    clickHandler(){
        console.log("class button is clicked")
    }
    render() {
        return (
        <div>
          <button onClick={this.clickHandler}>class button</button>  
        </div>
    )
    }
}




export default Eventhandling