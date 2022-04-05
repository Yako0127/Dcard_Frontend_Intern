import React, { useState, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from "../Function/useFetch";
import './ReposList.css';
function RepoList (){

    const listInnerRef = useRef();
    let [ Refetch, setRefetch] = useState(false);

    const IsBottom  = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if(scrollTop + clientHeight === scrollHeight){
                //console.log("bottom")
                setRefetch(true)
            }
            else{
                setRefetch(false)
            }
        }
    }
    let { username } : {username : String} = useParams()
    let navigate = useNavigate()
    let url = "https://api.github.com/users/"+username+"/repos"
    
    let {data : repo, loading, error} = useFetch( url, Refetch)
    //console.log(Refetch)
    if( loading ) return (<div>LOADING....</div>)
    if( error ) console.log(error)
    if (repo.message === "Not Found") return (<div>NOT FOUND....</div>)
    return (
        <div onScroll={IsBottom} ref={listInnerRef} style={{ height: "500px", overflowY: "auto"}}>
            <h1 >
                Repository for { username }
            </h1>
            <div >
                {
                    repo && repo.map((data) => (
                        <div onClick={()=>{navigate('/users/'+username+'/repos/'+data.name)}} className = "ReposListCard"> 
                            <p>name: {data.name}</p>
                            <p>stargazer: {data.stargazers_count}</p>
                        </div>
                    ))
                    
                }
            </div>
        </div>
        
    
    );
}

export default RepoList;
