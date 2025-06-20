import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text cleared!", "success");
  }
  const handleinverseClick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Converted to inverse!", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("Textarea");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);

  }
  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra space", "success");
  }
  const [text, setText] = useState('');
  // setText("new Text");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" id="Textarea"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleinverseClick}>Inverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
      </div >
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} <b>words</b> and {text.trim().length} <b>characters</b></p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in above textbox to prewview it"}</p>
      </div>
    </>
  );
}
