import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function PostForm() {
//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("")

//     useEffect(async() => {
        
//         const requestOptions = {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({title:'title',body:'body'})
//         };
//         fetch('https://flaskreact-n-weektwotes-rkuxmn.herokuapp.com/add',requestOptions);
//         const data = await response.json();
//         .catch(function(error){
//         console.log("error with fetch:" + error.message);
//         //throws error
//         throw error;
// }, []);
    return (
        <div>
            {/* <form onSubmit={(e)=> useEffect(e)}>
                <input onChange={(e)=>setTitle(e)} id ='title' value={title.title} placeholder='title' type='text'></input>
                <input onChange={(e)=>setBody(e)} id ='body' value={body.body} placeholder='body' type='text'></input>
                <button>Submit</button>

            </form> */}
        </div>
    );
}

export default PostForm
