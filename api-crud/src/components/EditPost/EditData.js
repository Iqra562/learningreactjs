import React , {useEffect, useState,memo} from "react";
import { apiUrl } from "../../App";

function EditData(props){
  const {editData , getPosts} = props;
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [loader,setLoader]= useState(false);
  useEffect(()=>{
    if(editData){
      setBody(editData.body);
      setTitle(editData.title);
    }
  },[editData]);
const editFormHandler =async (event)=>{
event.preventDefault();
if(!title || !body){
alert("input fields can't be empty");
return;

}
const payload = {
  body,
  title,
};
 await fetch(`${apiUrl}/posts/${editData.id}`,{
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
.then(()=>{
  setTitle("");
  setBody("");
  let $ = window.$;
  $("#edit-post").modal("hide");
  getPosts();
})
.catch((error)=>console.log(error))


}
// console.log("edit page")
    return(
        <div className="modal fade" id="edit-post">
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
              <h4 className="modal-title">Edit Post</h4>
            </div>
            <div className="modal-body">
              <form
                action=""
                method="POST"
                role="form"
                onSubmit={editFormHandler}
                id="edit-post-form"
             
              >
                <input type="hidden" name="post_id" id="edit_post_id" />
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit_post_title"
                    placeholder="Title"
                    value={title}
                   onChange={(event)=>setTitle(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <label>Body</label>
                  <textarea
                    name=""
                    id="edit_post_body"
                    cols="30"
                    rows="10"
                    placeholder="Body"
                    value={body}
                    className="form-control"
                    onChange={(event)=>setBody(event.target.value)}
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="btn btn-primary"
                  
                  disabled={loader}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
}
export default memo(EditData);