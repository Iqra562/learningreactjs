import './App.css';
import Navbar  from './components.js/Navbar';
import Form from './components.js/form';
function App() {
  return (
   <>
 <Navbar title="ReactTitle"/>
 <div className="container"> 
   <Form heading="Enter your text"/>

 </div>
   </>
  );
}

export default App;
