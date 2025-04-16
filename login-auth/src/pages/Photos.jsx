import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios';
const Photos = () => {
    let [allImages, setAllImages] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/upload")
        .then(response=>{
            setAllImages(response.data);
        })
    },[])
    let image = useRef();
    let upload = ()=>{
        let myfile = image.current.files[0];
        let myform = new FormData();
        myform.append("photo", myfile)
        axios.post("http://localhost:3000/api/v1/upload", myform)
        .then(response=>{
            // console.log(response.data);
            setAllImages((state)=>[...state, response.data]);
        })
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <div className="my-3">
                    <label>Upload Your Photo</label>
                    <input ref={image} onChange={upload} type='file' className='form-control' />
                </div>
                <div className='row'>
                    {
                        allImages.map((item, index)=><div className='col-md-2' key={index}>
                            <a href={`http://localhost:3000/images/${item.name}`} download={`http://localhost:3000/images/${item.name}`}><img src={`http://localhost:3000/images/${item.name}`} className='img-thumbnail' style={{height : "150px"}}/></a>
                        </div>)
                    }
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photos