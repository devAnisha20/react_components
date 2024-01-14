import React, { Component } from 'react'

export class StateManagement extends Component {
    constructor(){
        super()
        // this.state="Anisha";
        this.state ={
          name:"Anisha",
          age:21,
          course:"React JS"
    }
    // const{name,age,course}=this.state;
  }
  render() {
    return (
      <div>
        {/* <h1>{this.state}</h1> */}
        <h1 style={{fontFamily:"cursive", color:"yellowgreen"}}>My name is {this.state.name}. I am {this.state.age} years old and Currently I am learning {this.state.course}.</h1>
        {/* <h1 style={{fontFamily:"cursive", color:"yellowgreen"}}>My name is {name}. I am {age} years old and Currently I am learning {course}.</h1>  */}
        <button onClick={()=>this.setState({name:"Anchal", age:22, course:"JAVA"})}>ChangeState</button>
      </div>
    )
  }
}

export default StateManagement