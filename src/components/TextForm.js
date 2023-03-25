import React, { useState } from 'react'

export default function TextForm(props) {

    const handeleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared successfully", "success");
    }

const handleCopy = ()=>{
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text coppied successfully", "success");
}

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your message here');
    //text = "Enter text here"; //Wrong way to change text
    //setText = ("Enter text"); //Correct way to change text
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h3>{props.Heading}</h3>
                <div className="form-group">
                    <textarea id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#4B515D', color: props.mode==='light'?'black':'white'}} className="form-control" rows="6"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-1" onClick={handeleUpperCase}>Convert to Upper-Case</button>
                <button className="btn btn-danger my-2 mx-1" onClick={handleClear}>Clear text</button>
                <button className="btn btn-success my-2 mx-1" onClick={handleCopy}>Copy text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Your text summary</h3>
                <p>{text.length} characters and {text.split(" ").length} words</p>
                <h3>Preview</h3>
                <p>{text.length===0?'Enter some text here to Preview':text}</p>
            </div>
        </>
    )
}
