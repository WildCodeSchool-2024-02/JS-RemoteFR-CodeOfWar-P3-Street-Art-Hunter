import PropTypes from 'prop-types';

import "../styles/styleGradientButton.css";

export default function GradientButton({ text, onClick }) {
  return (
    <button type="button" id="gradientButton" onClick={onClick}>
      <p id="textButton">{text}</p>
    </button>
  );
}

GradientButton.propTypes = {
    text: PropTypes.string.isRequired,      
    onClick: PropTypes.func.isRequired,     
  };