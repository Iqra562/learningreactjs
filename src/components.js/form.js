import React,{useState} from "react";
export default function Form(props){
    const UppreCaseFunction  = ()=>{
        // console.log('clicked');
        let newText = Text.toUpperCase();
        useText(newText)
        // useText("you have clicked");
    }
    const ChangeFunction = (event)=>{
        useText(event.target.value);
    }
    const [Text,useText]= useState(' ');
    return(
 <div>
    <h1>{props.heading}</h1>
    <div className = "mb-3 my-3">
        <textarea className="form-control" id="text" value={Text} onChange={ChangeFunction} rows="8"></textarea>
        <button className="btn btn-info my-3 text-white" onClick={UppreCaseFunction}>UpperCase</button>


    </div>
 </div>
    )
}