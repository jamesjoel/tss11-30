import React from 'react'

const Home = () => {
  
   let a = 26;
   let b = false;

   let x = true;
  
    return (
        <>
        {
            a % 5 == 0 || b==true
            ?
            <Demo />
            :
            <h2>Mumbai</h2>
        }

        {
            x
            ?
            <h1>mumbai</h1>
            :
            ''
        }
        </>
    
  )
}



let Demo = ()=>{
    return(
        <>
            <h1>Indore</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magni obcaecati incidunt repellat! Soluta in rerum dolorum, enim accusamus nulla tempore animi praesentium, modi doloremque dolores dicta harum voluptate qui?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium nisi itaque dolore sapiente quis ducimus, veritatis hic ratione similique magnam. Tempora quam obcaecati debitis eos at, unde labore doloremque maxime laborum, ratione sit? Maxime fugiat asperiores quos provident delectus nesciunt facere earum temporibus dicta obcaecati. Ex corporis similique provident possimus, dicta nemo repellat harum modi iure. Sequi architecto cumque expedita deleniti dolor vero, dolorum adipisci illum odit. Autem maiores ratione velit rerum praesentium expedita, dolorem optio libero illum dolor error deleniti totam pariatur facilis aperiam placeat beatae cumque eligendi id est soluta reprehenderit illo vero! Accusamus esse voluptatum reprehenderit.</p>
            </>
    )
}

export default Home