import React from 'react';

const CustomInputField=({customInputLabel,customInputPlaceholder,customInputValue,OnFieldChange,type,targetState})=>{
    //props could also be referred like below
    //const CustomInputField=(props)=>{
    //console.log(props);
    //console.log(props.customInputLabel) or console.log(props.customInputPlaceholder) //these are the attributes passed from the app.js
    //
    const changeHandler=(event)=>{
        OnFieldChange(event,targetState);
    }
    return(
        
        <div className="form-group">
                <label htmlFor="name">{customInputLabel}</label>
                <input 
                type={type} 
                className="form-control" 
                id="name" 
                placeholder={customInputPlaceholder}
                value={customInputValue} 
                required={true}
                onChange={changeHandler}

                />
        </div>
    )
};

export default CustomInputField;