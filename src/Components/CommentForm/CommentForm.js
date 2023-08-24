import { useState } from "react";

const CommentForm = () => {
  // const [comment, setComment] = useState()
  const [values, setValues] = useState({
    name:'',
    comment:''
  })
  const handleForm = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return ( 
    <form className="d-flex flex-column">
      <label htmlFor="name">Nombre:</label>
      <input onKeyUp={(e)=>handleForm(e)} id="name" name="name" type="text" />
      <label htmlFor="comment">Comentario:</label>
      <input onKeyUp={(e)=>handleForm(e)} id="comment" name="comment" type="text" />
    </form>
   );
}
 
export default CommentForm;