import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from "../Function/useFetch";

function ReposInfo (){
    let { username } : { username: String }  = useParams()
    let { repos } : { repos: String } = useParams()
    let navigate = useNavigate()
    //console.log(username)
    //console.log(repos)
    let url = "https://api.github.com/repos/"+username+"/"+repos
    
    let {data : repo, loading, error} = useFetch( url )

    if( loading ) return (<div>LOADING....</div>)
    if( error ) console.log(error)
    return (
        <div>
            <h1>
                Repository for { username }
            </h1>
            <div>
                {
                    <div> 
                        <p>name: {repo.full_name}</p>
                        <p>description: {repo.description}</p>
                        <p>stargazers_count: {repo.stargazers_count}</p>
                        <a href={repo.html_url} target="_blank" >website link</a>
                        <p></p>
                        <button onClick={()=>{navigate('/users/'+username+'/repos/')}}> return</button>
                    </div>
                    
                }
            </div>
        </div>
        
    
    );
}

export default ReposInfo;
