import React, { useState } from "react";

export default function Worldcounter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
    const words = newText.split(" ");
    setWordCount(words.filter((word) => word !== "").length);
    setCharCount(newText.length);
    setParagraphCount(newText.split("\n").length);
  }

  return (
    <div>
      <div className="container">
        <h2> World Counter</h2>
        <div className="toptopbutton">
          <div className="topbutton">
            <button>World</button>
            <p>{wordCount}</p>
          </div>
          <div className="topbutton">
            <button>Letter</button>
            <p>{charCount}</p>
          </div>
          <div className="topbutton">
            <button>Paragraph</button>
            <p>{paragraphCount}</p>
          </div>
        </div>
        <textarea
          className="textarea"
          value={text}
          onChange={handleTextChange}
          cols="50"
          rows="10"
        ></textarea>
        <div className="botBottom">
          <button className="button1">Click to Uppercase</button>
          <button className="button1">Click to Lowercase</button>
        </div>
      </div>
    </div>
  );
}
