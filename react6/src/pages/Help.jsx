import {useNavigate} from 'react-router-dom'
let Help = ()=>{
    let navigate = useNavigate()
    let demo = ()=>{    
       localStorage.removeItem("token")
       navigate("/") 
    }
    return(
        <>
        <h1>Help Page</h1>
        <button onClick={demo}>Ok</button>
        </>
    )
}
export default Help;