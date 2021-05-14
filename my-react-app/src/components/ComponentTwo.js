import React from "react";
import {render} from "react-dom";

class ComponentTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
            name:props.firstName,
            status:0,
        };

        setTimeout(() => {
            this.setState({
                status:1
            });
            
        }, 3000);
        console.log("Inside Constructor");
    }

   

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentWillMount(){
        console.log("Component Will Mount");
    }

    componentWillReceiveProps() {
        console.log("Component will recieve Props")
    }


    // Before Rendering and after recieving Props
shouldComponentUpdate(){
    console.log("Component Should Update")

}



    render(){
        return(
            <h1>Component Two</h1>
        )
    }



   
}


export default ComponentTwo;
