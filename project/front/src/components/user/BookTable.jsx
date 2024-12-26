import React from 'react'

const BookTable = () => {
  return (
    <section className="table-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-top2 text-center">
                        <h3>Book <span>your</span> table</h3>
                        <p><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form action="#">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                            </div>
                            <input type="text" id="datepicker" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-clock-o"></i></span>
                            </div>
                            <input type="text" id="datepicker2" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-user-o"></i></span>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="table-btn text-center">
                            <a href="#" className="template-btn template-btn2 mt-4">book a table</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookTable