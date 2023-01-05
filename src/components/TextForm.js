import React, { useState } from "react";

export default function TextForm(props) {
  //uppercase
  const handleUpClick = () => {
    console.log("Uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Lowercase
  const handleLoClick = () => {
    console.log("Lowercase button clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  //clear fun
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }

  //remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    console.log("Handle on change clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="myBox">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode === 'dark' ? '#383838' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'}}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <br />
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
