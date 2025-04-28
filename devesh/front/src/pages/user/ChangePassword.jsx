import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {API_URL} from '../../constants/API_URL'
import UpdatePassSchema from '../../schemas/UpdatePassSchema'

const ChangePassword = () => {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState(false);

  let updatePassFrm = useFormik({
    validationSchema : UpdatePassSchema,
    initialValues : {
      pass : '',
      newpass : '',
      renewpass : ''
    },
    onSubmit : (formData)=>{
      // console.log(formData);
      axios.post(`${API_URL}/user/updatepassword`, formData,{
        headers : { Authorization : localStorage.getItem("access-token")}
      })
      .then(response=>{
        // console.log(response.data);
        if(response.data.success==true){
          navigate ('/my-account');
        }else if(response.data.success ==false && response.data.errType == 1 ){
          setErrMsg(true);
        }
      })
    }
})
  


  return (
    <>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form onSubmit={updatePassFrm.handleSubmit}>
          <div className="card my-5">
            <div className="card-header">
              <h5>Update Your Password</h5>
            </div>
            <div className="card-body">
              <div className="my-2">
                <label>Current Password</label>
                <input name='pass' type='password' onChange={updatePassFrm.handleChange} className={"form-control" + (updatePassFrm.errors.pass && updatePassFrm.touched.pass ? ' is-invalid' : '')}/>
              </div>
              {
                errMsg
                ?
                <small className='text-danger'>Your Current Password is Wrong</small>
                :
                ''
              }
               
              {
                 updatePassFrm.errors.pass && updatePassFrm.touched.pass
                 ?
                <small className='text-danger'>{updatePassFrm.errors.pass}</small>
                 :
                 ''
               }
              <div className="my-2">
                <label>New Password</label>
                <input name='newpass' type='password' onChange={updatePassFrm.handleChange} className={"form-control" + (updatePassFrm.errors.newpass && updatePassFrm.touched.newpass ? ' is-invalid' : '')}/>
              </div>
              {
                 updatePassFrm.errors.newpass && updatePassFrm.touched.newpass
                 ?
                <small className='text-danger'>{updatePassFrm.errors.newpass}</small>
                 :
                 ''
               }
              <div className="my-2">
                <label>Confirm New Password</label>
                <input name='renewpass' type='password' onChange={updatePassFrm.handleChange} className={"form-control" + (updatePassFrm.errors.renewpass && updatePassFrm.touched.renewpass ? ' is-invalid' : '')}/>
              </div>
              {
                 updatePassFrm.errors.renewpass && updatePassFrm.touched.renewpass
                 ?
                <small className='text-danger'>{updatePassFrm.errors.renewpass}</small>
                 :
                 ''
               }
               
            </div>
            <div className="card-footer">
            <NavLink className='btn btn-info m-2' to='/my-account'>Back</NavLink>
            <button type='submit' className='btn btn-info m-2'>Update Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    
    </>
  )
}

export default ChangePassword