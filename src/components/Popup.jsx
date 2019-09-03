import React from 'react';
import PropTypes from 'prop-types';
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

Popup.propTypes = {
	classes: PropTypes.string,
	popup: PropTypes.bool.isRequired,
	onClosePopup: PropTypes.func.isRequired
};

export default Popup;