import React, { useState } from 'react'


export default function TextForm(props) {
    const toUpperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted To Uppercase Successfully" , 'success')
    }
    const firstLetterToUpperCase = () => {
        let retriveText = text
        
        let splittedArr = retriveText.split(" ")
        let newArr = splittedArr.map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        })
        let result = newArr.join(" ")
        setText(result)
        props.showAlert("Converted 1st letter To Uppercase Successfully" , 'success')
    }
    const toLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted To Lower case Successfully" , 'success')
    }
    const clearText = () => {
        let newtext = "";
        setText(newtext)
        props.showAlert("clear text Successfully" , 'success')
    }
    const copyText = () => {
        let  text = document.getElementById('myBox')
        text.select();
        text.setSelectionRange(0,99999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied Successfully" , 'success')
    }
    const formatSentences = () => {
        let retriveText = text
        let splittedArr = retriveText.split(".")
        let newArr = splittedArr.map((word) => {
            return (word.trimStart())
        })
        let newArr2 = newArr.map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        })
        let result = newArr2.join(".")
        setText(result)
        props.showAlert("format sentences Successfully" , 'success')
    }
    
    
    
    // Function called from input text field , enables the text Area to enter text if we don't write below code
    // we can't input anything inside textArea

    const handleOnChange = (event) => {
        // console.log("onchange was clicked");
        setText(event.target.value)
        // setText("you have click on handleOnChange")
    }
    const removeExtraSpace =()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(' '))
        props.showAlert("Remove Extra Spaces Successfully" , 'success')
    }
    


    const [text, setText] = useState("Enter text here :")
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
            <h3>{props.heading} - </h3>
            {/*  text input field */}
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#111113':'white' , color: props.mode==='dark'? 'white':'black'}} id="myBox" rows={7} />
            </div>
            <button className="btn btn-primary mx-3 my-2" onClick={toUpperCase}>to Upper Case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={firstLetterToUpperCase}>1st leter to UpperCase</button>
            <button className="btn btn-primary mx-3 my-2" onClick={toLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={formatSentences}>Format Sentenses</button>
            <button className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy TextRemove</button>
            <button className="btn btn-primary mx-3 my-2" onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'? 'white':'black'}}>
            <h2>Your test Summary</h2>
            <p className=''>words: {text.split(" ").length} , character: {text.length} </p>
            <p > time Require to read :{ 0.008*text.split(" ").length} min</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? "Enter Something in textBox above to preview here: ":text}</p>
        </div>
        </>

    )
}
