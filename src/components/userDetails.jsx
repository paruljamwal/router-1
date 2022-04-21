

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const UserDetails=()=>{
const [userdatabase,setUserDatabase]=useState([])
    //hook
    const {id}=useParams();
    
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
         .then(({data})=>{
             setUserDatabase(data.data)
         })

    },[])

    return (
       
       <div>
        <img src={userdatabase.avatar} alt=""/>

         <h4>
             {userdatabase.first_name}{userdatabase.last_name}
         </h4>

         <p>{userdatabase.email}</p>
        
        
        
        </div>)
}