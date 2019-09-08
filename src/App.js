//import React,{Component,Fragment} from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInputField from './CommonComponents/CustomInputField/CustomInputField';
//const{Component}=React; //this is object detructuring
//class App extends React.Component//instead of dot notation , we can even destructure the react object
//ctrl+space get u the methods defined inside the component
//cube - props ;cuboids:methods
class App extends Component
{
  constructor(){
    super();
    
    console.log("Hello");
  }
  //state object is predefined
  state={
    inputvalue:"abc",
    customInputLabel:"Name",
    customInputPlaceholder:"Enter your Name",
    customInputValue:"pb",
    customEmailLabel:"Email",
    customEmailPlaceholder:"Enter Email",
    customEmailValue:""
  };
  componentDidMount(){
    //debugger;
    console.log("Component Mounted");
  }

  componentDidUpdate(){ //used for animations,event listenes
    console.log("Called eveytime render method is called");
  }
  onInputChange=(event)=>{
    const inputvalue1=event.target.value;
    this.setState({
      //inputvalue:inputvalue
      //this inputvalue is the property of the state object
      inputvalue:inputvalue1
    })
    console.log(event.target.value);
  }
  // OnCustomInputFieldChange=(event,targetState)=>{
  //   //console.log(event);
  //   //console.log(targetState);
  //   this.setState({
  //     customInputValue:event.target.value
  //   })
  // }
  // OnCustomEmailFieldChange=(event,targetState)=>{
  //   this.setState({
  //     customEmailValue:event.target.value
  //   })
  // }
  OnFieldChange=(event,targetState)=>{
     this.setState({      
      [targetState]:event.target.value
  })
}
 /*  onchan=(event)=>{
    console.log(event);
  } */
  render(){
    const {inputvalue,customInputLabel,customInputPlaceholder,customInputValue,customEmailLabel,customEmailPlaceholder,customEmailValue}=this.state;
    return(
      //<div>
      //<Fragment>      
      <>
      <div>Hello World</div>
      <input value={inputvalue} 
      placeholder="Here"
      onChange={this.onInputChange}></input>  
      <CustomInputField
        type={'text'}
        customInputLabel={customInputLabel} customInputPlaceholder={customInputPlaceholder} customInputValue={customInputValue}
        OnFieldChange={this.OnFieldChange} targetState={"customInputValue"}
      /> 
      <CustomInputField
        type={'email'}
        customInputLabel={customEmailLabel} customInputPlaceholder={customEmailPlaceholder} customInputValue={customEmailValue}
        OnFieldChange={this.OnFieldChange} targetState={"customEmailValue"}
      /> 
    
   </>
 //the attibutes inside the customInputField act as the arguments to the prop
 //</Fragment>
      //</div>
    )
    //onChange={(event)=>{console.log(event);}}></input>
  }
}


export default App;