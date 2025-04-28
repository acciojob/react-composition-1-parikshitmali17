
import React, { useState } from 'react'

function Tab({tabs}) {
  const [indexof,setIndexof]=useState(0)
  return (

    <div>
      {console.log(tabs)}
      <ul>
      
        {tabs.map((ele,index)=>{
         return  (<li key={index}><button key={index}  onClick={()=>{setIndexof(index)}} >{ele.title}</button></li>)
        })}
        
        </ul>
        <p>{tabs[indexof].content}</p>
    </div>
  )
   


  
}

export default Tab