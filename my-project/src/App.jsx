import React, { useEffect, useState } from 'react';

const App = () => {
  const [inputs, setInputs] = useState([{ product: '', price: '' }]);
  const [price, setPrice] = useState(null); 

  const addInput = () => {
    setInputs([...inputs, { product: '', price: '' }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const removeInput = (Remove) => {
    const newInputs = inputs.filter((item, index) => index !== Remove);
    setInputs(newInputs);
  };

  const saveInput = () => {
    const total = inputs.reduce((sum, item) => sum + Number(item.price || 0), 0);
    setPrice(total); 
  };

  useEffect(() => {
    const total = inputs.reduce((sum, item) => sum + Number(item.price || 0), 0);
    setPrice(total);
  }, [inputs]); 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {inputs.map((input, index) => (
            <div key={index} className="input-group m-2">
              <input
                type="text"
                name="product"
                value={input.product}
                onChange={(e) => handleChange(index, e)}
                className="form-control m-3"
                placeholder="Product"
              />
              <input
                type="number"
                name="price"
                value={input.price}
                onChange={(e) => handleChange(index, e)}
                className="form-control m-3"
                placeholder="Price"
              />
              <button
                onClick={() => removeInput(index)}
                className="btn btn-danger m-3"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='row'>
        <div className="col-md-6">
          <button onClick={addInput} className="btn btn-info m-3">
            Add
          </button>
          <button onClick={saveInput} className="btn btn-success m-3">
            Save
          </button>

          <h3>
            {
              price === null || price === 0
                ?
               ''
                :
                `Total: ₹${price}`
            }
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
