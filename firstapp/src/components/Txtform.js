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

  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <label htmlFor="My-Text" className="form-label">{props.lable}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange}></textarea>
    <button className="btn btn-primary my-2 mx-2" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
    <button className="btn btn-danger my-2 mx-2" onClick={hadleclear}>Clear</button>
    </div>
    <div className="container">
      <h1>Your Text summary</h1>
      <p clasName="b">Words : {text.split(" ").length} and characters : {text.length}</p>
      <p>{ 0.005*text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
