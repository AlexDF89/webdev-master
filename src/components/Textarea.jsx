import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
	return(
		<textarea placeholder={props.placeholder} className={`textarea ${props.classes?props.classes:''}`} ></textarea>
	);
}

Textarea.propTypes = {
	placeholder: PropTypes.string,
	classes: PropTypes.string
};

export default Textarea;