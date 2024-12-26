import React from 'react'
import Header2 from '../../components/user/Header2'

const About = () => {
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
        </div>
    </section>
    </>
  )
}

export default About