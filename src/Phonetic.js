import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="phonetic">
        <a href={props.phonetic.audio} target="blank">
          🔊
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
