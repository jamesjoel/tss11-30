import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
const City = () => {
    let [allCity, setAllCity] = useState([]);
    let [totalCity, setTotalCity] = useState(0);
    let [recPerPage, setRecPerPage] = useState(200);

    let [pageNum, setPageNum] = useState([]);
    let [skip, setSkip] = useState(0)
    let [activePage, setActivePage] = useState(1)

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/pagination/city/${skip}/${recPerPage}`)
        .then(response=>{
            setAllCity(response.data);
        })
        
        

    },[])


    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/pagination/total`)
        .then(response=>{
            let x = Math.ceil(response.data.total/recPerPage);
            setTotalCity(x);
            // let arr = [];
            // for(let i=1; i<=x; i++){
            //     arr.push(i);
            // }
            let arr = Array.from({length : x});
            setPageNum(arr);
        })
    },[])


    let getCity = (a)=>{ // 7

        let s = (a-1)*recPerPage;
        setActivePage(a);
        setSkip(s);
        axios.get(`http://localhost:3000/api/v1/pagination/city/${s}/${recPerPage}`)
        .then(response=>{
            setAllCity(response.data);
        })
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className='pagination my-2'>
                    <li className='page-item'>
                        <button className={'page-link ' + (activePage==1 ? 'disabled' : '')} onClick={()=>getCity(activePage-1)}>Prev</button>
                    </li>
                    {
                        pageNum.map((item, index)=>{
                            return(

                                <li key={index} className={'page-item ' + (index+1 == activePage ? 'active' : '')}>
                                    <button onClick={()=>getCity(index+1)} className='page-link' href=''>{index+1}</button>
                                </li>
                            )
                        })
                    }
                        <li className='page-item'>
                        <button  className={'page-link ' + (activePage==totalCity ? 'disabled' : '')} onClick={()=>getCity(activePage+1)}>Next</button>
                    </li>
                </ul>
                <table className='table table-dark table-hover table-striped mt-4'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCity.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{skip+index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default City

/*
    let arr = Array.from({length : 10})

    ["", "", "", ]

*/