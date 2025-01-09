import React from 'react'

const About = () => {

  let data = ["indore", "pune", "delhi", "bhopal", "mhow", "ujjain"];

  return (
    <>
    <select>
      {
        data.map((item)=>{
          return(
            <option>{item}</option>
          )
        })
      }

    </select>
    </>
  )
}

export default About