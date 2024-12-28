import React from 'react'
import Header2 from '../../components/user/headers/Header2'

const About = () => {

    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amit",
            age : 20
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "jaya",
            age : 23
        },
    ]

    

  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    
                    <div className="welcome-img">
                        
                        <img src="assets/images/welcome-bg.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="welcome-text mt-5 mt-md-0">
                        <h3><span className="style-change">welcome</span> <br/>to food fun</h3>
                        <p className="pt-3">Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree am waters brought. Divide after there. Was.</p>
                        <p>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</p>
                        <a href="#" className="template-btn mt-3">book a table</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index)=><tr>
                                                        <td>{index+1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.age}</td>
                                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About