import React from "react";
import Meaning from "./Meaning";

export default function WordInfo(props) {
  console.log(props.wordInfo);
  if (props.wordInfo) {
    return (
      <div className="container__wordInfo">
        <h1>{props.wordInfo.word}</h1>
        <h2>{props.wordInfo.phonetic}</h2>
        {props.wordInfo.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
          //meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
