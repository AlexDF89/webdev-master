import React from 'react';

function Button(props) {
	return(
		<button onClick={props.clickHandler} className={`button ${props.classes?props.classes:''}`}>
			{props.text}
		</button>
	);
}

export default Button;