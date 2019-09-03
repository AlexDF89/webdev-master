import React from 'react';
import PropTypes from 'prop-types';

function SocialLi(props) {
	return (
		<li className={`social-li ${props.classLi}`}>
			<a href={props.href} target="blank"  rel="noreferrer noopener"><img className="social-img" src={props.imgSrc} alt="" />{props.text ? props.text : ''}</a>
		</li>
	);
}

SocialLi.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	classLi: PropTypes.string
};

export default SocialLi;