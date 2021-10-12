import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
 
  const [u_name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [body,setBody]=useState("");
  const [postId,setID]=useState(1);
  // const [users,setUser]=useState([])
  
  // below code is for fetching data from api using fetchApi
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then((result)=>{
  //     result.json().then((resp)=>{
  //       // console.warn(resp)
  //       setUser(resp)
  //     })
  //   })
  // },[])
  // console.warn(users)


  function saveData()
    {
      let data={postId,u_name,email,body}
    // console.warn(data);
      fetch('https://jsonplaceholder.typicode.com/comments?postId=1', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }).then((resp)=>{
        console.warn("resp",resp);
        resp.json().then((result)=>{
          console.warn("result",result)
        })
      })
    }

  return (
    <div className="App">
      {/* <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.name}</td>
          </tr>
          )
        }
       </tbody>
      </table> */}
      <h1>POST API Example </h1>  
      <input type="text" name="postid" value={postId}  /> <br /> <br />
      <input type="text" name="name" value={u_name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={body} onChange={(e)=>{setBody(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}

export default App;
