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
    customInputValue:"",
    customEmailLabel:"Email",
    customEmailPlaceholder:"Enter Email",
    customEmailValue:"",
    customPasswordLabel:"Password",
    customPasswordValue:"",
    customRetypePasswordLabel:"Retype Password",
    customRetypePasswordValue:"",
    customDOBLabel:"Date of Birth",
    customDOBValue:""
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
    const {inputvalue,customInputLabel,customInputPlaceholder,customInputValue,customEmailLabel,
      customEmailPlaceholder,customEmailValue,customPasswordLabel,customPasswordValue,customRetypePasswordLabel,
      customRetypePasswordValue,customDOBLabel,customDOBValue}=this.state;
    return(
      //<div>
      //<Fragment>      
      <>
      <form onSubmit>
      <div>Hello World !</div>
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
      <CustomInputField
        type={'password'}
        customInputLabel={customPasswordLabel} customInputValue={customPasswordValue}
        OnFieldChange={this.OnFieldChange} targetState={"customPasswordValue"}
      /> 
      <CustomInputField
        type={'password'}
        customInputLabel={customRetypePasswordLabel} customInputValue={customRetypePasswordValue}
        OnFieldChange={this.OnFieldChange} targetState={"customRetypePasswordValue"}
      /> 
         <CustomInputField
        type={'date'}
        customInputLabel={customDOBLabel} customInputValue={customDOBValue}
        OnFieldChange={this.OnFieldChange} targetState={"customDOBValue"}
      />    
      </form>
   </>
 //the attibutes inside the customInputField act as the arguments to the prop
 //</Fragment>
      //</div>
    )
    //onChange={(event)=>{console.log(event);}}></input>
  }
}


export default App;