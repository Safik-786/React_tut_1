import React, { useState } from 'react'

function Validation() {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const [email, setemail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleName = (e)=>{
        let name = e.target.value;
        if (name.length<5) {
            setNameError(true)
        }
        else{
            setNameError(false)
        }
        console.log(name)
        setName(name)
    }
    const handleEmail= (e)=>{
        let email= e.target.value;
        if (!email.match(emailRegex)) {
            setEmailError(true)
        }
        else{
            setEmailError(false)
        }
        setemail(email)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let name = e.target[0].value;
        if (name.length<5) {
            setNameError(true)
        }
        else{
            setNameError(false)
        }
        let email= e.target[1].value;
        if (!email.match(emailRegex)) {
            setEmailError(true)
        }
        else{
            setEmailError(false)
        }
        // alert(e.target[0].value+ " " +e.target[1].value)
        if ((! name.length<5 && email.match(emailRegex))){
            alert('Form Submitted successfully')
        } 

    }
  return (
    <div style={{textAlign:"center"}}>
      <h3>Form Validation Demo</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input type="text" name='name' onChange={handleName} value={name} />
        <br />
        {nameError ? <span style={{color:'red'}}>Name length must be greater than 4 character</span>: ''}
        <br /><br />



        <label htmlFor="">Enter Email: </label>
        <input type="text" name="email" onChange={handleEmail} value={email} />
        <br />
        {emailError? <span style={{color:'red'}} >Invalid email</span> : ''}
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Validation
