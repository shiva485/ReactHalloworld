import React from 'react'
import { Component } from 'react'

//  (****   this is functional component  ********)

// const Destructuring = ({ name, branch }) => {
//     return (
//         <div>
//          <h> my name {name} my branch name is {branch}</h>
//         </div>
//     )

// }


//   (***********      this is class level component   ***********)


// class Destructuring extends Component {

//     render() {
//         return (
//             <div>
//     <h3>welcome Mr.{this.props.name} your branch is {this.props.branch}</h3>
//             </div>
//         )
//     }

// }


//   or 

class Destructuring extends Component {
    render() {
        const { name, branch } = this.props
        const {  id, adress } = this.props
        return (
            <div>
                <h3>welcome Mr.{name} your branch is {branch}</h3>
                <h4> your number  {id}  and address {adress}</h4>
            </div>
        )
    }

}



export default Destructuring