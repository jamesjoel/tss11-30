import React from 'react'

const TopSection = (props) => {
  return (
    <>
    <section className="breadcrumb regervation_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>{props.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default TopSection