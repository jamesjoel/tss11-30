import React, {useState} from 'react'

const Event5 = () => {

    let [name, setName] = useState("");

    let [txt, setTxt] = useState("");

    let [city, setCity] = useState("");

    // let changeHandler = (event)=>{
    //     setName(event.target.value)
    // }

    let [data, setData] = useState([])

    let show = ()=>{
        setTxt(name)
    }

    let add = ()=>{
        setData([...data, city]);
        setCity("");
    }

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='form-control' />
                <button onClick={show} className='btn btn-info'>Show</button>
                <h1>{txt}</h1>
            </div>
        </div>
    </div>
    <br />
    <br />
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <input value={city} onChange={(e)=>setCity(e.target.value)} type='text' className='form-control' />
                <button onClick={add} className='btn btn-primary'>Add</button>

                <h2>Cities</h2>
                <ul>
                    {
                        data.map((item)=>{
                            return(
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Event5

/*
    let [demo, setDemo] = useState("devesh");

    setDemo("anulr")

*/