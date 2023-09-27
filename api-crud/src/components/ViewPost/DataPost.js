import React,{memo} from "react";
function DataPost(props){
    const {editFunction,deleteFunction}= props;
    return(

        <table className="table table-hover">
        <thead>
          <tr>
            <th>Post Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Edi~t</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="todos-listing">
      {props.post?.map((singlePost)=>{
        const {id,userId,title} = singlePost;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => editFunction(event,id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
              onClick={(event)=>deleteFunction(event,id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
        })}
        </tbody>
      </table>
    )
}
export default memo(DataPost);