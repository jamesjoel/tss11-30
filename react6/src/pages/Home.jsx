import {useNavigate} from 'react-router-dom'
let Home = ()=>{
    let navigate = useNavigate();
    let demo = ()=>{
        localStorage.setItem("token", "hello world");
        navigate("/about")
    }

    return(
        <>
        <h1>Home Page</h1>
        <button onClick={demo}>ok</button>
        </>
    )
}
export default Home;