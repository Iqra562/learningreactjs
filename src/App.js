import React,{ useState } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import Alert from './components/alert';
import Form from './components/form';
function App() {
 const [btntext,changetext] = useState('Enable dark mode');
 const [alert,setalert] = useState(null);
 const [mode,setmode]= useState('light');
 const showAlert = (message,type,color) =>{
   setalert({
    msg:message,
    type: type,
    color:color
   })
   setTimeout(()=>{
          setalert(null)
   },2000)
 }
 const togglemode = ()=>{
  if(mode === 'light'){
    setmode('dark');
    changetext('Disable dark mode');
    document.body.style.backgroundColor = 'black';
    showAlert('Dark mode has been enabled','dark','light');
    
  }else{
    setmode('light');
    changetext('Enable dark mode');
    document.body.style.backgroundColor = 'white';
    showAlert('Dark mode has been disabled','info','dark');


  }
 }
  return (
   <>
 <Navbar title="ReactTitle" mode={mode} btntext={btntext} togglemodeFunction={togglemode}/>
   <Alert alert={alert}/>
 <div className="container"> 
   <Form heading="Enter your text"  mode={mode}/>
   {/* <About/> */}

 </div>
   </>
  );
}

export default App;
