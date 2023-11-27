import React from 'react'

function EventHandler(props) {
    function helloFunction(){
        alert('Hello Brother')
    }
    function helloFun(name){
        alert('Hello  '+ name)
    }
    const helloFun2= (name)=>{
        alert('Heyyyyyyyyy  '+ name)
    }

  return (
    <div className='d-flex justify-content-evenly align-item-center'>
      <input type="button" value="Click"  onClick={helloFunction}/>
      <input type="button" value="Click Adil"  onClick={()=> helloFun(props.name)}/>
      <input type="button" value="Click Elvis"  onClick={()=> helloFun2("Elvis Bhai")}/>
    </div>
  )
}

export default EventHandler
