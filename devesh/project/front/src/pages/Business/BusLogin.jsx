 import React from 'react'
 
 const BusLogin = () => {
   return (
     <>
       
    <div id="about" className="about-main pad-top-100 pad-bottom-100">
    <div className="container">
     <div className='row'>   
    <div className="col-md-6 offset-md-3">
      <div className="card" style={{backgroundColor : '#E6E6E6'}}>
        <div className='card-header text-light' style={{backgroundColor : "#E75B1E"}}>
        <h3 className="text-center pt-3"> Business Login</h3>

        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="email"><h4> Email address: </h4></label>
              <input type="email" className="form-control" id="email" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="password"><h4>Password:</h4></label>
              <input type="password" className="form-control" id="password" placeholder="Enter password"/>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox"/> Remember me
              </label>
            </div>
          </form>
        </div>
        <div className='card-footer'>
        <button style={{backgroundColor : "#E75B1E"}} type="submit" class="btn btn-block table-btn text-light pt-3"><h4>Login</h4></button>
        
        
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
     </>
   )
 }
 
 export default BusLogin;