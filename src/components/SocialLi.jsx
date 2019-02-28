import React from 'react';

function SocialLi(props) {
	return (
		<li className={`social-li ${props.classLi}`}>
			<a href={props.href} target="blank"  rel="noreferrer noopener"><img className="social-img" src={props.imgSrc} alt="" /></a>
		</li>
	);
}

export default SocialLi;