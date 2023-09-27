import React, { useState,memo } from  "react";
import { apiUrl } from "../../App";
function AddData(props){
  const {getPosts} = props;
    const [title,setTitle]= useState("");
    const [body,setBody ] =useState("");
    const [loading,setLoading] = useState(false);
    const addPost = async(event)=>{
      console.log("hello")
event.preventDefault();
if(!title || !body){
    alert("input fields can't be empty");
    return;
}
const payload = {
    title,
    body,
};
setLoading(true);
await fetch(`${apiUrl}/posts`,{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(payload),
}).then(()=>{
  setTitle("");
  setBody("");
  let $ = window.$;
  $("#create-todo").modal("hide");
getPosts();

})
setLoading(false);

    }
    return(
      <>
      
        <div className="modal fade" id="create-todo">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Create Post</h4>
            </div>
            <div className="modal-body">
              <form
                action=""
                method="POST"
                role="form"
                id="create-post-form"
                onSubmit={addPost}
              >
                <div className="form-group">
                  <label>Title </label>
                  <input
                    type="text"
                    className="form-control"
                    id="post_title"
                    value={title}
                    placeholder="Title" onChange={(event)=>setTitle(event.target.value)}
                
                  />
                </div>
  
                <div className="form-group">
                  <label>Body </label>
                  <textarea
                    name=""
                    id="post_body"
                    cols="30"
                    rows="10"
                    placeholder="Body"
                    className="form-control"
                    value={body}
                   onChange={(event)=>setBody(event.target.value)}
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="post-create-btn"
  
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>

    )
}
export default memo(AddData);