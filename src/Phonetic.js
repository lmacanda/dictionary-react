import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
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
