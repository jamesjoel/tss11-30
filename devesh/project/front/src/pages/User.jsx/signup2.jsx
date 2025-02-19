import { useEffect , useState } from "react"
import axios from "axios"

 
const signup2 = () => {

    let [ allState , setAllState] = useState([]);
    let [ allcity , setAllcity] = useState([]);

    let [ a , setA] = useState("");

    useEffect (()=>{
        axios
        .get(`http://localhost:3001/api/v1/city/state`)
        .then (response =>{
            setAllState(response.data);
        })    
        
    })

     let getstate = (e)=>{
        let x = e.target.value;
        // console.log(x)
        axios
        .get(`http://localhost:3001/api/v1/city/getcity/${x}`)
        .then (response=>{
            setAllcity(response.data);
            // console.log(response.data)
            
        })
    }

  return (
   <>
    <div id="about" className="about-main pad-top-100 pad-bottom-100">
    <div className="container">

    <form>
     <div className='row'>   
    <div className="col-md-6 offset-md-3">
      <div className="card" style={{backgroundColor : '#E6E6E6'}}>
        <div className='card-header text-light' style={{backgroundColor : "#E75B1E"}}>
        <h3 className="text-center pt-3"> User Singup</h3>
         <h1>{a}</h1>
        </div>
        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input name='name' type='text' className= 'form-control'/>
                               
                            </div>
                           
                            <div className="my-2">
                                <label>State</label>
                                <select name='state'   onChange={(e)=>getstate(e)} className= 'form-control' >
                                    <option>select</option>
                                    {
                                        allState.map(item=><option>{item}</option>)
                                    }
                                    
                                </select>

                            </div>
                            <div className="my-2">
                            <label>City</label>
                                  <select  name="city"   className="form-control"> 
                                     
                                    {
                                        allcity.map(item=><option>{item.name}</option>)
                                    } 
        
                                 </select>

                            </div>
                           
                        </div>
                        <div className="card-footer">
                            <button className='btn text-light px-4 pt-3' type='submit' style={{backgroundColor : "#E75B1E"}}><h3> signup</h3> </button>
                        </div>
       
      </div>
    </div>
    </div>
    </form>

  </div>
</div>

   </>
  )
}

export default signup2