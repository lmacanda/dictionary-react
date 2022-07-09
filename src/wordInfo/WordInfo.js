import React from "react";
import Meaning from "../meaning/Meaning";

export default function WordInfo(props) {
  console.log(props.wordInfo);
  if (props.wordInfo) {
    return (
      <div className="container container__wordInfo">
        <div className="row row__word mb-3">
          <div className="col-8 col__word mt-2 align-self-end">
            <h1 className="text-center mb-0">{props.wordInfo.word}</h1>
          </div>
          <div className="col-4 mt-2 col__phoenetic align-self-end">
            <h2 className="text-center mb-0">{props.wordInfo.phonetic}</h2>
          </div>
        </div>
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
