import React, { Component } from 'react';

class Stateex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'this is state example'
        }
    }

    changemethod(){
        this.setState({
            message:'thak you for subscribing '
        })

    } 
    
    render() {
        return (
            <div >
                {this.state.message}<br/>
                <button onClick={() => this.changemethod() }>subscribe</button>
            </div>
        )

        }
}

export default Stateex