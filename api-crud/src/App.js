import { useCallback, useEffect, useState } from 'react';
import './App.css';
import DataPost from './components/ViewPost/DataPost';
import AddData from './components/AddPost/AddData';
import EditData from './components/EditPost/EditData';
export const apiUrl = "https://jsonplaceholder.typicode.com";
function App() {
  const [post,setPost] = useState([]);
  const [editData,setEditData]= useState(null);
  useEffect(()=>{
    getPosts();
  },[]);
  const getPosts =useCallback( ()=>{
    fetch(`${apiUrl}/posts`)
    .then((response)=>response.json())
    .then((data)=>{
      // console.log(data);
      setPost(data);
    })
    .catch(console.error)
    // console.log("getpost")
  },[post]
);
  const  editPostHandler =useCallback((event,id) =>{
    // alert("hello")
 event.preventDefault();
 fetch(`${apiUrl}/posts/${id}`)
 .then((response)=> response.json())
 .then((data)=>{
let $ = window.$;
$("#edit-post").modal("show");
setEditData(data);
// console.log("edit function")

 })
 .catch(console.error);
  },[post])
  const deleteFunction =useCallback ((event,id)=>{
event.preventDefault();
if(window.confirm("Are you sure?")){
fetch(`${apiUrl}/posts/${id}`,{
  method:"DELETE",
})
.then(()=>{
  getPosts();
})
.catch((error)=>console.error(error))
}
// console.log("deletefunction")
  },[post])
return(
  <div className='container'>
    <h1>Posts</h1>
    <a className="btn btn-primary "data-toggle="modal"  href="#create-todo">
      Create Post
    </a>
    <AddData getPosts ={getPosts}/>
    <DataPost post= {post} deleteFunction={deleteFunction} editFunction={editPostHandler} />
  <EditData editData={editData}  getPosts={getPosts}/>
  </div>
)
}

export default App;
