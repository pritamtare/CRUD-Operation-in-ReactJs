import React,{useState, useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditUser() {
    let his1=useHistory();
    const {id}=useParams();
    const [user ,setUser]=useState({
        name:'',
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone, website}=user;
    const onInputChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmited=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        his1.push("/");
    }
    useEffect(()=>{
        loadUser();
    },[]);
const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data)

}

    return (
        <div className="container">
         <h1>Edit User</h1>   
      <form onSubmit={e=>onSubmited(e)}>
      <div className="form-group">
          <label htmlFor="name1">Name</label>
          <input type="text" className="form-control" id="name1" name="name" value={name} onChange={e=> onInputChange(e)} />
         
        </div>
      <div className="form-group">
          <label htmlFor="uname">User Name</label>
          <input type="text" className="form-control" id="uname" name="username" value={username} onChange={e=> onInputChange(e)}/>
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={email} onChange={e=> onInputChange(e)}/>
         
        </div>
        <div className="form-group">
          <label htmlFor="phno">Phone No</label>
          <input type="text" className="form-control" id="phno" value={phone} name="phone" onChange={e=> onInputChange(e)}/>
        </div>
        <div className="form-group">
        <label htmlFor="web">Website</label>

          <input type="text" className="form-control" id="web" name="website" value={website} onChange={e=> onInputChange(e)}/>
        </div>
        <button type="submit" className="btn btn-warning">Update User</button>
      </form>
        </div>
    )
}
