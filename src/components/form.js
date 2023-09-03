import React,{useState} from "react";
export default function Form(props){
    const UppreCaseFunction  = ()=>{
        // console.log('clicked');
        let newText = Text.toUpperCase();
        useText(newText)
        // useText("you have clicked");
    }
    const LowerCaseFunction  = ()=>{
        // console.log('clicked');
        let newText = Text.toLowerCase();
        useText(newText)
        // useText("you have clicked");
    }
    const ClearTextFunction  = ()=>{
        let newText = '';
        useText(newText)
    }
    const CopyTextFunction  = ()=>{
        let newText = document.getElementById('text');
        newText.select();
        navigator.clipboard.writeText(newText.value);

    }
    const ChangeFunction = (event)=>{
        useText(event.target.value);
    }
    const [Text,useText]= useState('');
    return(
        <>
 <div className={`container  text-${props.mode ==='light'?'dark':'light'}` }>
    <h1>{props.heading}</h1>
    <div className = "mb-3 my-3">
        <textarea className="form-control" id="text"  value={Text} placeholder="Write summary..."  onChange={ChangeFunction} rows="8"></textarea>
        <button className="btn btn-info my-3 text-white" onClick={UppreCaseFunction}>UpperCase</button>
        <button className="btn btn-info mx-3 text-white" onClick={LowerCaseFunction}>LowerCase</button>
        <button className="btn btn-info mx-3 text-white" onClick={ClearTextFunction}>ClearText</button>
        <button className="btn btn-info mx-3 text-white" onClick={CopyTextFunction}>CopyText</button>


    </div>
 </div>
 <div className={`container  text-${props.mode ==='light'?'dark':'light'}`}>
    <h1>Count  summary</h1>
    <p> {Text.trim().split(" ").length}words and  {Text.trim().length} characters</p>
    <h1>Time to read</h1>
    <p>{0.008 * Text.trim().split(" ").length} minutes</p>
    <h2>Preview</h2>
    <p>{Text.length > 0 ? Text:'Write summary to preview your summary'}</p>
 </div>
 </>
    )
}