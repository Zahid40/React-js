import React, { useState } from 'react'

export default function Txtform(props) {
  const [text, setText] = useState('Enter text Here');
  const [speak, setspeakNot] = useState('Speak');

  const handleupclick = () => {
    // console.log("Click upper" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showalt("success","Converted to Uppercase")
  }
  const handlelowclick = () => {
    // console.log("Click upper" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showalt("success","Converted to Lowercase")
  }
  const handleonchange = (event) => {
    // console.log("click onchange")
    setText(event.target.value)
  }
  const hadleclear = () => {
    setText("")
    props.showalt("danger","Clear")
  }
  const handlespeakclick = () => {
    var changeclass = document.getElementById("Speakbtn");
    if (speak === 'Speak') {
      setspeakNot('Stop')
      changeclass.classList.remove("btn-success")
      changeclass.classList.toggle("btn-warning")
      let msg = new SpeechSynthesisUtterance();
      msg.text = text
      window.speechSynthesis.speak(msg)
      props.showalt("warning","Speaking")

    }
    else {
      setspeakNot('Speak')
      window.speechSynthesis.cancel()
      changeclass.classList.remove("btn-warning")
      changeclass.classList.toggle("btn-success")
      props.showalt("danger","Stoped")

    }
  }
  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showalt("light","Text Copied")
  }
  const hadleremoveextra = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalt("success","Extra Spaces Removed")
  }

  return (
    <>
      <div className=" p-3 container" style={{backgroundColor : props.mode==='light'?'#c0d6e4':'#05141a', color :  props.mode==='light'?'#133337':'#9ac4ff'}}>
      <h1 className='p-3 rounded'style={{backgroundColor : props.mode==='light'?'white':'#05141a', color :  props.mode==='light'?'#133337':'#63dcf6'}}>Hello,</h1>
      <p className='p-3 rounded'style={{backgroundColor : props.mode==='light'?'#ff9999':'#05141a', color :  props.mode==='light'?'#133337':'#63dcf6'}}>{props.heading}</p>
        <label htmlFor="My-Text" className="form-label">{props.lable}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange} style={{backgroundColor : props.mode==='light'?'white':'#000c11', color :  props.mode==='light'?'#133337':'#9ac4ff'}}></textarea>
        <div className="container text-center">
          <div className="row my-2">
            <div className="col">
              <button className="btn btn-danger btn-width" onClick={hadleclear}>Clear</button>
            </div>
            <div className="col">
              <button className="btn btn-success btn-width" id='Speakbtn' onClick={handlespeakclick}>{speak}</button>
            </div>
            <div className="col">
              <button className="btn btn-light btn-width" onClick={handlecopy}>Copy</button>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <button className="btn btn-outline-primary btn-width" onClick={hadleremoveextra}>Remove Extra Spaces</button>
            </div>
            <div className="col">
              <button className="btn btn-outline-primary btn-width" onClick={handleupclick}>Convert to Uppercase</button>
            </div>
            <div className="col">
              <button className="btn btn-outline-primary btn-width" onClick={handlelowclick}>Convert to Lowercase</button>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className='p-3 rounded' style={{backgroundColor : props.mode==='light'?'white':'#05141a', color :  props.mode==='light'?'#133337':'#63dcf6'}}>Your Text summary</h2>
          <p>Words : <strong>{ text.trim()===""?0:text.split(" ").length}</strong></p>
          <p>characters : <strong>{text.length}</strong></p>
          <p>Sentence : <strong>{text.trim()===""?0:text.split(".").length}</strong></p>
          <p>Paragraph : <strong>{text.trim()===""?0:text.split("\n\n").length}</strong></p>

          <p><strong>{0.005 * (text.trim()===""?0:text.split(" ").length)}</strong> Minutes To Read</p>
          <p><strong>{text.length / text.split(" ").length}</strong> Charactors Per Word</p>
          <h2 className='p-3 rounded' style={{backgroundColor : props.mode==='light'?'white':'#05141a', color :  props.mode==='light'?'#133337':'#63dcf6'}}>Preview</h2>
          <p>{text}</p>
       </div>
      </div>
    </>
  )
}
