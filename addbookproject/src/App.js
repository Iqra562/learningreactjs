import './App.css';
import {useState} from "react";
function App() {
  const [title,setTitle] = useState("");
  const [author,setAuthor] =  useState("");
  const [isbn,setIsbn] = useState("");
  const [book,setbooks]=useState([]);
  const [editIndex,seteditIndex] = useState(null);
const bookFormSubmitHandler = (event) =>{
event.preventDefault();
if(!title || !author || !isbn){
  alert('input fields are empty');
return;
}
if(editIndex === null){
setbooks([...book,{title,author,isbn}]);

}else{
  const temporarybook = [...book];
  const findbook = temporarybook[editIndex];
 findbook.title = title ;
findbook.author = author;
findbook.isbn = isbn ;
setbooks(temporarybook);
seteditIndex(null);

}
setTitle("");
setAuthor("");
setIsbn("");
}
const editFunction = (event,index) =>{
event.preventDefault();
 seteditIndex(index);
 const findBook = book[index];
 setTitle(findBook.title);
 setAuthor(findBook.author);
 setIsbn(findBook.isbn);


}
const deleteBookFunction = (event,index)=>{
event.preventDefault();
if(window.confirm("Are you sure?")){
  const temporarybook = [...book];
  temporarybook.splice(index,1);
  setbooks(temporarybook);
}

}
  return (
    <div className="container">
    <h1>Add Book</h1>
    <form id="book-form" onSubmit={bookFormSubmitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          id="title"
          value={title}
          className="u-full-width"
          onChange={(event)=>setTitle(event.target.value)}
        />
        {title}
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          id="author"
          className="u-full-width" value={author}
        onChange = {(event)=>setAuthor(event.target.value)}
        />
        {author}
      </div>
      <div>
        <label>ISBN#</label>
        <input
          type="number"
          id="isbn" value={isbn}
          className="u-full-width"
     onChange = {(event)=>setIsbn(event.target.value)}
        />
        {isbn}
      </div>
      <div>
        <input type="submit" value="Submit" className="u-full-width" />
      </div>
    </form>
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="book-list">
    {
      book.map((singleElement,index)=>{
  return (
    <tr>
      <td>{singleElement.title}</td>
      <td>{singleElement.author}</td>
      <td>{singleElement.isbn}</td>
      <td><button onClick={(event) => editFunction(event,index)}>Edit</button></td>
      <td>
      <a href="#" className='delete' onClick={(event)=>deleteBookFunction(event,index)}>
        X 
      </a>
      </td>
    </tr>
  )
      })
    }
         
  
      </tbody>
    </table>
  </div>
  );
}


export default App;
