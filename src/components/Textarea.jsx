import React from 'react';

function Textarea(props) {
	return(
		<textarea placeholder={props.placeholder} className={`textarea ${props.classes?props.classes:''}`} ></textarea>
	);
}

export default Textarea;