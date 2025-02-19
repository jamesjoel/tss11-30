import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import Header2 from '../../components/user/headers/Header2'


const Signup2 = () => {

    let [a, setA] = useState("");

    let [x, setX] = useState()

    let [allState, setAllState] = useState([]);
    let [allCity, setAllCity] = useState([]);
    

    useEffect(()=>{
        axios
        .get(`${API_URL}/city/state`)
        .then(response=>{
            setAllState(response.data);
        })
    },[])


    let getState = (e)=>{
        let x = e.target.value;
        axios
        .get(`${API_URL}/city/getcity/${x}`)
        .then(response=>{
            // console.log(response.data);
            setAllCity(response.data);
        })
    }

  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
                
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card border border-1">
                    <div className="card-header footer-widget">
                        <h4>User Register</h4>
                        
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Name</label>
                            <input type='text' value={x} onChange={(e)=>setX(e.target.value)} className='form-control' />
                        </div>
                        <div className="my-2">
                            <label>State</label>
                            <select onChange={(e)=>getState(e)} name='state' className={'form-control'} >
                                <option>Select</option>
                                {
                                    allState.map(item=><option>{item}</option>)
                                }
                            </select>
                        </div>
                        <div className="my-2">
                        <label>City</label>
                            <select name='city'  className={'form-control'} >
                                <option>Select</option>
                                {
                                    allCity.map(item=><option>{item.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='template-btn'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
                
        </div>
    </section>
    </>
  )
}

export default Signup2

/*
()=>{console.log();console.log()}

onClicke={handleChange}
onClicke={()=>handleChange()}
onClicke={(e)=>handleChange(e)}

*/