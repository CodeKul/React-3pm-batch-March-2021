import React, { Component } from 'react'

export default class Counterex extends Component {

    constructor(props){

        console.log("Inside Constructor")
        super(props); 
        this.state = {
            Counter:0
        }

        this.increment = () => this.setState({Counter : this.state.Counter+1})
        this.decrement = () => this.setState({Counter: this.state.Counter-1}) 
            
        

    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    shouldComponentUpdate()  {
        console.log("Component should update")
        return true
    }

    componentWillUpdate(){
        console.log("Component is updating")
    }

    componentDidUpdate(){
        console.log("Component has been updated")
    }

    componentWillUnmount(){
        console.log("Component will be removed")
    }

    

    render() {
        console.log("Renderer")
        return (
            <div>
                
                <div className="counter-ex">Counter : {this.state.Counter}</div>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    
}
