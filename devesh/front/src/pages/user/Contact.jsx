import React, { useRef, useState } from 'react'
import Header2 from '../../components/user/header/Header2'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const Contact = () => {
    let [name, setName] = useState("");
    let [gender, setGender] = useState("");
    let a = useRef();

    let myfile = useRef();
    let frm = useFormik({
        initialValues : {
            image : ''
        },
        onSubmit : (formData)=>{
            // console.log(formData);
            // console.log(myfile.current.files[0]);

            let data = myfile.current.files[0];
            let FORM = new FormData();  // java script
            FORM.append("myfile",data);
            FORM.append("name","rohit");

            axios.post(`${API_URL}/demo`,FORM)
            .then(response=>{
                console.log(response.data);
            })
        }

    })
  return (
    <>
    <Header2/>
    <div className="container" style={{minHeight:'650px'}}>
        <form onSubmit={frm.handleSubmit}>
        <br/>
        <input ref={myfile} name='image' onChange={frm.handleChange} type='file'/>
        <br/>
        <br/>
        <button type='submit' className='btn btn-success'>Upload</button>
        </form>
        <br/>
        <br/>

        <h1 ref={a}>helloworld</h1>
        <button onClick={()=>console.log(a.current)}>ok</button>
        <button onClick={()=>console.log(a.current.innerHtml)}>ok</button>
        <br/>
        <br/>
       

        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  />
        <button onClick={()=>console.log(name)}>ok</button>
        <button onClick={()=>setName('rohit')}>ok</button>
        <br/>
        <br/>

        Gender : Male<input type='radio' name='gender' value='male' onChange={(e)=>setGender(e.target.value)} checked={gender=='male'} />
         Female<input type='radio' name='gender' value='female' onChange={(e)=>setGender(e.target.value)} checked={gender=='female'} />
         <h3>{gender}</h3>
         <button onClick={()=>setGender("male")}>M</button>
         <button onClick={()=>setGender("female")}>F</button>


    </div>

    </>
  )
}

export default Contact