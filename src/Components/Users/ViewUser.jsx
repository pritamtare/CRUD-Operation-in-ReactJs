
import React,{useState, useEffect} from 'react'
import { useHistory,useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
    const [user ,setUser]=useState({
        name:'',
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data)
}

    return (
        <div className="container">
            <h1>User Data</h1>
        <Link className="btn btn-primary" to="/">Back to home</Link>
        <h1>user id:{id}</h1>
        <ul className="list-group">
            <li className="list-group-item">Name:{user.name}</li>
            <li className="list-group-item">UserName:{user.username}</li>
            <li className="list-group-item">Email:{user.email}</li>
            <li className="list-group-item">Phone:{user.phone}</li>
            <li className="list-group-item">Website:{user.website}</li>
        </ul>
        </div>
    )
}
