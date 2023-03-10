import React from "react";
import PropTypes from "prop-types";

export function SimpleButton(props) {
  return (
    <button
      onClick={props.callback}
      className={props.className}
      disabled={props.disabled === "true" || props.disabled === true}
    >
      {props.text}
    </button>
  );
}

SimpleButton.defaultProps = {
  disable: false,
};

SimpleButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  callback: PropTypes.func,
  disable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
