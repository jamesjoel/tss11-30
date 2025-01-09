import React from 'react'

const Product = () => {
    let data = [
        {
            title : "I-Phone",
            price : 25000
        }
    ]



  return (
    <>
        {
            data.length == 0
            ?
            <div className='alert alert-info'>
                No Data Found
            </div>
            :
            <table className='table table-dark table-hover table-bordered'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Product Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
        }
    </>
  )
}

export default Product