import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [newTasks,setTasks] = useState("");
  const [allTasksArray,setTasksArray ] = useState([]);
  const submitTasks = (event)=>{
event.preventDefault();
if(!newTasks){
alert("Input feild is empty");
return;
}
// console.log(newTasks)
setTasksArray([...allTasksArray,{newTasks}]);
// console.log(allTasksArray)
setTasks("");

  }
  const deleteTasks = (event,index)=>{
    event.preventDefault();
    // console.log(event,"event")
    //  console.log(index,"index")
   if(window.confirm("Are you sure?")){
     const copytasks= [...allTasksArray] ;
     copytasks.splice(index,1);
     setTasksArray(copytasks); 
   }
}
   const clearTask= (event)=>{
    event.preventDefault();
if(window.confirm("Are you sure?")){
// console.log("error");
setTasksArray([]);
}

   }
   const filterElement=(event) =>{
 event.preventDefault();
// filteration
const currentValue = event.target.value;
// console.log(currentValue);
const filterValue = currentValue.toLowerCase();
// console.log(filterValue);
const listItem = document.querySelectorAll('.collection-item');

listItem.forEach(function (singleLi){
    // console.log(singleLi)
    const singleLiText = singleLi.innerText.toLowerCase();
// console.log(singleLiText);
if(singleLiText.indexOf(filterValue) === -1){
    singleLi.style.display = "none";
    // singleLi.style.color = "white";
   
}else{
    singleLi.style.display = "block";
    // singleLi.style.color = "green";
}
})
   };
   
  return (
    <div className="container">
    <div className="row">
        <div className="col s12">
            <div id="main" className="card">
                <div className="card-content">
                    <span className="card-title">Task List</span>
                    <form id="task-form" onSubmit={submitTasks} action="">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" value={newTasks} onChange= {(event) => setTasks(event.target.value)} name="task" id="task"/>
                                {/* {newTasks} */}
                                <label htmlFor="task">New Task</label>
                            </div>
                        </div>
                        <input type="submit" value="Add Task" className="btn"/>
                        {/* <!-- <button type="submit" value="Add Task" className="btn"> --> */}
                    </form>
                </div>
                <div className="card-action">
                    <h5 id="task-title">Tasks</h5>
                    <div className="input-field col s12">
                        <input type="text" name="filter" onChange={(event)=> filterElement(event)} id="filter"/>
                        
                        <label htmlFor="filter">Filter Task</label>
                    </div>
                    <ul className="collection">
                        {allTasksArray.map((eachTask,index)=>{
                          return(
                            <li className="collection-item" key={index}>
                            {eachTask.newTasks}
                            <a href="#" className="delete-item secondary-content" onClick={(event)=>deleteTasks(event,index)}>
                                <i className="fa fa-remove"></i>
                            </a>
                        </li> 
                          )
                        })
                        /* <!-- <li className="collection-item">
                            List Item
                            <a href="#" className="delete-item secondary-content">
                                <i className="fa fa-remove"></i>
                            </a>
                        </li> --> */}
                    </ul>
                    <a className="clear-tasks btn black" onClick={(event)=> clearTask(event)}>Clear Tasks</a>
                </div>
            </div>
        </div>
    </div>
</div>


  );
}

export default App;
