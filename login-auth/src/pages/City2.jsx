import React,{useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const City = () => {

    let [city, setCity] = useState([]);
    let [cityPerPage, setCityPerPage] = useState(100);
    let [total, setTotal] = useState(0);
    let [pagenum, setPageNum] = useState([]);
    
    let [counter, setCounter] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
     
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/pagination/city/100`).then(result=>{
            setCity(result.data);
        })

        axios.get("http://localhost:3000/api/v1/pagination/total").then(result=>{
            
            let x = Math.ceil(result.data.total/cityPerPage);
            let arr = [];
            for(let i = 1; i <= x; i++){
                arr.push(i);
            }
            setPageNum(arr);
            
        })



    }, [])


    // let getCity = (a)=>{
    //     setCurrentPage(a);
    //     let x = (a-1)*cityPerPage;
    //     setCounter(x);
    //     axios.get(`http://localhost:3001/api/city/pagination/${cityPerPage}/${x}`).then(result=>{
    //         setCity(result.data);
    //     })
    // }

  return (
    <>
        <div className='container my-5'>
            
            <div className="row">
                <div className="col-md-12">
                <h4>City Per Page : {cityPerPage}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total  Record : {total}</h4>
            <ul className='pagination my-3'>

                <li className={'page-item '+(currentPage==1 ? 'disabled' : '')}>
                <button className='page-link'>Prev</button>
                </li>
                {
                    pagenum.map(x=>{
                        return(
                        <li key={x} className={'page-item ' + (currentPage==x ? 'active' : '')}>
                            <button className='page-link'>{x}</button>
                        </li> 
                        )
                    })
                }

                <li className={'page-item '+(currentPage==pagenum.length ? 'disabled' : '')}>
                    <button className='page-link'>Next</button>
                </li>

            
                  
                
            </ul>
                    <table className="table table-dark table-hover table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                city.map((x, n)=>{
                                    return(
                                        <tr key={n}>
                                            <td>{n+counter+1}</td>
                                            <td>{x.name}</td>
                                            <td>{x.state}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default City