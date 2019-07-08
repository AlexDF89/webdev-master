import React from 'react';
import FormContainer from '../containers/FormContainer';

function Popup(props) {
	return (
		<div className={`popup ${props.popup ? 'popup-active' : ''}`}>
			<div  className={props.classes ? props.classes : ''}>
				<div onClick={() => props.onClosePopup(false)} className="close-btn">X</div>
      	<FormContainer />
			</div>
    </div>
	);
}

export default Popup;