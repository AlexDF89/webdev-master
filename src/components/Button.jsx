import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return(
		<button onClick={props.onClick} className={`button ${props.classes?props.classes:''}`}>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	classes: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;