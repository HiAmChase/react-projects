import React from "react";

export function Summary(props) {
  return (
    <div className="bg-info text-white text-center p-2">
      {props.names.map((name) => (
        <div key={name}>{`${name} contains ${name.length} letters`}</div>
      ))}
    </div>
  );
}
