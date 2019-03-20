import React from 'react';
import Form from './Form';

function Popup(props) {
	return (
		<div className={`popup ${props.popup ? 'popup-active' : ''}`}>
			<div  className={props.classes ? props.classes : ''}>
				<div onClick={() => props.onClosePopup(false)} className="close-btn">X</div>
      	<Form />
			</div>
    </div>
	);
}

export default Popup;