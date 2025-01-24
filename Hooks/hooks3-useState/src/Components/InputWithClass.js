import React from "react";

export default class Input extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"Tony",
            lastName: "Stark",
        }
    }
    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    handleLastnameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }
    render(){
        return(
            <>
            <div className ="section">
                <Row label="Name">
                     <input className="input" 
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                     />
                </Row >
                <Row label="Last Name">
                     <input  className="input" 
                            value={this.state.lastName} 
                            onChange={this.handleLastnameChange}
                     />
                </Row >
          
            </div>


            <h2>Hello, {this.state.name + " " +this.state.lastName}</h2>
            </>
        )
    }
}


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
