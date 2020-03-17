import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hii"
        }
        this.clickHandler=this.clickHandler.bind(this)  //3
    }
    clickHandler(){
        this.setState({
            message: "goodbye"
        })
        console.log(this)
    }
    render() {
        // const {message}=this.state  
        return (
            <div>
                {this.state.message}<br/>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}        {/*{ type 1 }*/}

                {/* <button onClick={()=>this.clickHandler()}>click</button> */}           {/*{ type 2}*/}

                <button onClick={this.clickHandler}>click</button>                       {/*{type 3 }*/}

            </div>
        )
    }
}

export default Eventbind