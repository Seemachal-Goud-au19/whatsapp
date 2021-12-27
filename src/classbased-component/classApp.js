
import React, { Component } from 'react'

export default class ClassApp extends Component {
    constructor() {
        super();
        this.state = {
          name: "sim",
          age: 29
        };
      }
      componentWillMount() {
        console.log("componentwillMount")
      }
      Handler=()=>{
         this.setState({
             name:"coder"
         })
      }
      render() {
        return (
          <>
            <div>{this.state.name}</div>
          
            <button onClick={this.Handler.bind(this)}>click me</button>
          </>
        );
    }
}

