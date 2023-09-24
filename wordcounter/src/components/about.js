import React, {useState} from "react";
export default function About(){
    const [customStyle,setStyle]= useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText,updateText] = useState('Enable dark mode')
    const togglefunction = ()=>{
        if(customStyle.color == 'black'){
            setStyle({
                color:'white',
                backgroundColor:'black'
            });
            
            updateText('Disable dark mode')
        }else{
          setStyle({
            color:'black',
            backgroundColor:'white'
          });
          updateText('Enable dark mode');

        }
    }
    return(

<>
<div className="container my-3"  style={customStyle} >
<h1>About</h1>
    <div className="accordion" id="accordionExample" style={customStyle} >
    
    <div className="accordion-item" style={customStyle}>
      <h2 className="accordion-header" id="headingOne" >
        <button className="accordion-button"  style={customStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={customStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={customStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={customStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={customStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" style={customStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div></div>

<div className="container my-3">
<button className="btn btn-dark"  onClick={togglefunction}>{btnText}</button>
</div>
</>
    )
}