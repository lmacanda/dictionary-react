import React from "react";
import Meaning from "./meaning/Meaning";
import Phonetic from "./Phonetic";

export default function WordInfo(props) {
  if (props.wordInfo) {
    return (
      <div className="container__wordInfo">
        <div className="row row__word mb-5 align-item-center">
          <div className="col-md-8 col-lg-8 col-sm-12 col__word mt-2">
            <h1 className="text-center mb-0">{props.wordInfo.word}</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 mt-2 col__phonetic align-self-center">
            {props.wordInfo.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
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
