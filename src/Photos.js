import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4 mb-4" key={index}>
              <a href={photo.src.original} target="blank">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
