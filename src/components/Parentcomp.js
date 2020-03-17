import React, { Component } from 'react'
import Childcomponent from './Childcomponent';

class Parentcom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'parent'
        }

         this.parentmethod = this.parentmethod.bind(this)
    }

    parentmethod() {
        alert(`hallo ${this.state.message}`)
        
    }
    render() {
        return (
            <div>
                <Childcomponent  greethand={this.parentmethod} />
            </div>
        )
    }

}

export default Parentcom