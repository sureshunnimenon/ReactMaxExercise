import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    name: "Suresh Menon- the greatest coder living"
  }

  btnClickHandler = (newName) =>{
    console.log("Btn was cliked!");
    this.setState({
      name: newName
    })    
  }

  nameChgHandler = (event) => {
    console.log("input text was changed!")
      this.setState({
      name: event.target.value
    })
  }
  render() {
    const style = {
      backgroundColor: 'grey',
      fontStyle: 'italic',
      
      boxShadow: '4px 6px pink',
      padding: '1px'
    }
    return (
      <div className="App">
        <p>Example exercise for lesson1 in Udemy React </p>
        <UserInput changed = {this.nameChgHandler} name={this.state.name}/> 
        <button style={style} onClick = {(e) => this.btnClickHandler("suresh naloor")} > Click me to change the state </button>
        {/* <UserOutput name="sureshTheCoderGreatest" /> */} 
        
        <UserOutput name={this.state.name}
        clicked = {this.btnClickHandler.bind(this,"exbeyond")} /> 
      </div>
    );
  }
}

export default App;
