import { useState } from "react";
import MyBtn from "../components/MyBtn";
let Help = ()=>{
    let [name, setName] = useState("");
    let demo = ()=>{
        console.log("********");
    }
    
    
    return(
        <>
            <MyBtn data={setName} onClick={demo} className="btn btn-danger">James</MyBtn>
            <h1>{name}</h1>
        </>
    )
}
export default Help;