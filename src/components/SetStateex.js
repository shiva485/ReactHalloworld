import React, { Component } from 'react'

class SetStateex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementfive() {
        this.increment()
        // this.increment()
        // this.increment()
        // this.increment()

    }
    render() {
        return (
            <div>
                <h1>hi this is setstate in count {this.state.count}</h1>    
                <button onClick={() => this.incrementfive()}>increse value</button>
            </div>
        )
    }

}

export default SetStateex




