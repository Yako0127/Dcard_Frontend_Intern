import React, { useState } from 'react'

function useFetch( url, refetch = false ) {

    console.log("start fetch")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [EndIndex, setIndex] = useState(10)
    const [CurrentUrl, setUrl] = useState("")
    
    React.useEffect(() => {
        console.log(url)
        setLoading(true)
        if( refetch ){
            setIndex( EndIndex + 10 )
        }
        if ( CurrentUrl !== url ){
            setData( [] )
            setIndex( 10 )
            setUrl( url )
        }
        fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then( datas => {
            console.log(EndIndex)
            if( datas.length === undefined ) {
                setData(datas)
                return
            }
            setData(datas.slice(0, EndIndex))
        })
        .catch((error) => {
            setError(error)
        }).finally(()=> setLoading(false));
    },[ url,refetch ])
    return {data, loading, error}
}

export default useFetch