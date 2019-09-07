import React from 'react';

const CustomInputField=({label,placeholder,value})=>{
    //props could also be referred like below
    //const CustomInputField=(props)=>{
    //console.log(props);
    //console.log(props.customInputLabel) or console.log(props.customeInputPlaceholder) //these are the attributes passed from the app.js
    //
    return(
        
        <div className="form-group">
                <label htmlFor="name">{label}</label>
                <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder={placeholder}
                value={value} 
                required={true}
                />
        </div>
    )
};

export default CustomInputField;