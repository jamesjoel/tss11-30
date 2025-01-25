import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import axios from 'axios'


const About = () => {
    let [allCity,setAllCity] = useState([]);
    let [allState,setAllState] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/v1/city/state")
        .then(response=>{
            //console.log(response.data)
            setAllState(response.data)
        })
    },[])

    let getState = ((e)=>{
        let x = e.target.value
        axios
        .get(`http://localhost:3000/api/v1/city/getcity/${x}`)
        .then(response=>{
            //console.log(response.data)
            setAllCity(response.data)
        })
    })
  
    return (
    <>
    <Nav/>
    <div className='container-fluid' style={{minHeight:'500px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <div className="card card-border border-1">
                        <div className="card-Header bg-dark py-2 px-2">
                            <h4 className='text-light'>USER REGISTER</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input name='name' className='form-control' placeholder='Name'/>
                            </div>
                            <div className="my-2">
                                <label>State</label>
                                <select name='state' onChange={(e)=>getState(e)} className='form-control'>
                                    <option>Select</option>
                                    {
                                        allState.map(item=><option>{item}</option>)
                                    }
                                </select>
                            </div>
                            <div className="my-2">
                                <label>City</label>
                                <select name='city' className='form-control'>
                                   <option>Select</option>
                                    {
                                        allCity.map(item=><option>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="card-footer my-2">
                                <button className='button btn-dark btn-expand-sm'>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className= 'footer bg-dark' style={{height:'100px'}}></div>
    </>
  )
}

export default About