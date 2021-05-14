import React, { Component } from 'react'

export default class ClassForm extends Component {

    constructor () {
        super ()
        this.state = {
            empName: "",
            designation: ""
        }


        this.namechangeHandler = this.namechangeHandler.bind(this);

        this.desgchangeHandler = this.desgchangeHandler.bind(this);
    }

    namechangeHandler = event => {
        this.setState ({
            empName: event.target.value,
           
        })

        
    }

    

   

    desgchangeHandler = event => {
        this.setState ({
            designation: event.target.value,
        })
    }

    

    render() {
        return (
            <div>
                <form>

                    <label>Employee Name</label>
                    <input 
                    type="text"
                    name="empName"
                    value={this.state.empName}
                    onChange={this.namechangeHandler}/>


                    <label>Designation</label>
                    <input 
                    type="text"
                    name="designation"
                    value={this.state.designation}
                    onChange={this.desgchangeHandler}/>
                </form>

<p>{this.state.empName}</p>

<p>{this.state.designation}</p>
               
            </div>
        )
    }
}
