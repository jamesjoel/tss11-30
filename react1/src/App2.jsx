import React, {useState} from 'react'

const App2 = () => {

    let [color, setColor] = useState(["red", "green", "blue", "gray", "orange"])

    let clearHandler = ()=>{
        setColor([]);
    }
    let newColorHandler = ()=>{
        setColor(["pink", "white"])
    }
    let addColorHandler = ()=>{
        setColor([...color, "black", "yellow"]);
    }
    let deleteColorHandler = ()=>{
        let a = "green";
        setColor((current)=>{
            return current.filter(item=>item!=a);
        })
    }

    let updateColorHandler = ()=>{
        let a = "gray";
        let b = "purple"
        setColor((cur)=>{
            return cur.map(item=> item==a ? b : item);
        })
    }
  return (
    <div>
        <button onClick={clearHandler}>Clear</button>
        <button onClick={newColorHandler}>New Color</button>
        <button onClick={addColorHandler}>Add Color</button>
        <button onClick={deleteColorHandler}>Delete Color</button>
        <button onClick={updateColorHandler}>Update Color</button>
        {
            color.map(item=><h1>{item}</h1>)
        }

    </div>
  )
}

export default App2