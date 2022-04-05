import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"
const Header = (()=>{
    const [TextValue, setText] = React.useState("")

    let navigate = useNavigate()
    const handleSetState = e => {
        setText(e.target.value)
    }
    console.log(TextValue)
    return(
        <div style={{ height: "150px", overflowY: "auto"}}>
            <h1>WEB FRONTEND INTERN HOMEWORK</h1>
            <ul className="nav">
                <li>
                    <Link to='/'></Link>
                </li>
                <li>
                    <Link to='/users/jserv/repos'>試用例子：jserv</Link>
                </li>
            </ul>
            <div className="search">
                <input type = "text" value = { TextValue } onChange={ handleSetState }/>
                <input type = "button" onClick={()=>{navigate('/users/'+TextValue+'/repos')}} value = "search"/>
            </div>
            
        </div>
    )
})

export default Header;