import React  , {useState} from 'react'

export default function Txtform(props) {
  const[text,setText] = useState('Enter text Here');

  const handleupclick = ()=>{
    // console.log("Click upper" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handlelowclick = ()=>{
    // console.log("Click upper" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleonchange = (event)=>{
    // console.log("click onchange")
    setText(event.target.value)
  }
  const hadleclear = ()=>{
    setText("")
  }
  const handlespeakclick = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text
    window.speechSynthesis.speak(msg)
  }
  const handlespeakstop = ()=>{
    window.speechSynthesis.cancel()
  }

  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <label htmlFor="My-Text" className="form-label">{props.lable}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange}></textarea>
    <button className="btn btn-danger my-2 mx-2" onClick={hadleclear}>Clear</button>
    <button className="btn btn-success my-2 mr-2" onClick={handlespeakclick}>Speak</button>
    <button className="btn btn-warning my-2 mr-2" onClick={handlespeakstop}>Stop</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
    </div>
    <div className="container">
      <h2>Your Text summary</h2>
      <p>Words : <strong>{text.split(" ").length}</strong></p>
      <p>characters : <strong>{text.length}</strong></p>
      <p>Sentence : <strong>{text.split(".").length}</strong></p>
      <p>Paragraph : <strong>{text.split("\n\n").length}</strong></p>

      <p><strong>{ 0.005*text.split(" ").length}</strong> Minutes To Read</p>
      <p><strong>{text.length/text.split(" ").length}</strong> Charactors Per Word</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
