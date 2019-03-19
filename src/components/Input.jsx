import React from 'react';

function Input(props) {
	return(
		<input placeholder={props.placeholder} type={props.type ? props.type : "text"} className={`input ${props.classes?props.classes:''}`} />
	);
}

export default Input;