import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
	return(
		<input placeholder={props.placeholder} type={props.type ? props.type : "text"} className={`input ${props.classes?props.classes:''}`} />
	);
}

Input.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	classes: PropTypes.string
};

export default Input;