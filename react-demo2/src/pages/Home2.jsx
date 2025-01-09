import React, {useState} from 'react'

const Home2 = () => {

    let [bgColor, setBgColor] = useState("pink");
    let [check, setCheck] = useState(true);

    let [num, setNum] = useState(100);

    let clickHandler1 = ()=>{
        setBgColor("red");
    }
    let clickHandler2 = ()=>{
        setBgColor("blue");
        
    }
    let clickHandler3 = ()=>{
        setBgColor("green");

    }
    let clickHandler4 = ()=>{
        if(check==true){

            setCheck(false)
        }else{
            setCheck(true);
        }
    }

    let inc = ()=>{
        setNum(()=>{
            let x = num;
            x += 10; 
            return x;
        });
    }
    let dec = ()=>{
        setNum(()=>{
            let x = num;
            x -= 10;
            return x;
        });
    }

  return (
    <>
    <div style={{display : "flex"}}>
        
        <div onClick={clickHandler1} style={{height : "50px", width : "50px", backgroundColor : "red"}}></div>
        <div onClick={clickHandler2} style={{height : "50px", width : "50px", backgroundColor : "blue"}}></div>
        <div onClick={clickHandler3} style={{height : "50px", width : "50px", backgroundColor : "green"}}></div>


    </div>
    <button onClick={clickHandler4}>Hide</button>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <br />
    {
        check==true
        ?
        <div style={{height : num+"px", width : num+"px", backgroundColor : bgColor, borderRadius : "200px"}}></div>
        :
        ''

    }
    </>
  )
}

export default Home2