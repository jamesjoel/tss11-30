import React from 'react'

const TopSection = (props) => {
  return (
    <section className="banner-area banner-area2 text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1><i>{props.name}</i></h1>
                    <p className="pt-2"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopSection