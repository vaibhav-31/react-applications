import { useEffect, useState } from "react";
import axios from "axios";

const RenderingList = () => {
    const[comments, setComments] = useState([]);
    const[name, setName] = useState('');
    const[body, setBody] = useState('');
    const[adds, setAdds] = useState([]);
    
    const userLogin = (e) => {
      e.preventDefault();
      axios.post('https://jsonplaceholder.typicode.com/comments', { Name: name, Body: body })
        .then((res) => {
            console.log(res.data);
            setAdds(res.data)
        })
        .catch((e) => {
            console.log(e.message);
        })
    };
      
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            console.log(res.data);
            setComments(res.data)
        })
        .catch((e) => {
            console.log(e.message);
        })
    }, [])

    return(
        <>
         <h3>List</h3>

         <div>
            <label>Name</label><br/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <label>Body</label><br/>
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} /><br/>
            <button onClick={(e) => userLogin(e)}> Submit</button>
         </div>

         
         {
             comments.map((comment) => {
                 return(
                     <>
                     <section key={comment.id}>
                         <div>Name: {comment.name}</div><br/>
                         <div>Body: {comment.body}</div><br/>
                     </section>
                     </>
                 )
             })
         }

         {                   <>
                                  <div>Name: {adds.Name}</div><br/>
                                  <div>Body: {adds.Body}</div><br/>
                             </>
         }

        </>
    )
}

export default RenderingList;