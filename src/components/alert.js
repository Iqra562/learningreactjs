import React from "react";
export default function  Alert(props){
    return(
        
    props.alert &&   <div className={`alert alert-${props.alert.type} d-flex text-${props.alert.color} align-items-center`} role="alert">
  <div>
   <strong>{props.alert.msg}</strong>
  </div>
</div>


    )
}