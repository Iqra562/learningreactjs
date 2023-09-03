import React,{ useState } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import About from './components/about';
import Form from './components/form';
function App() {
 const [btntext,changetext] = useState('Enable dark mode');
 const [mode,setmode]= useState('light');
 const togglemode = ()=>{
  if(mode === 'light'){
    setmode('dark');
    changetext('Disable dark mode');
    document.body.style.backgroundColor = 'black';
  }else{
    setmode('light');
    changetext('Enable dark mode');
    document.body.style.backgroundColor = 'white';

  }
 }
  return (
   <>
 <Navbar title="ReactTitle" mode={mode} btntext={btntext} togglemodeFunction={togglemode}/>
 <div className="container"> 
   <Form heading="Enter your text"  mode={mode}/>
   {/* <About/> */}

 </div>
   </>
  );
}

export default App;
