import React from 'react';

import SocialLi from './SocialLi';

function Social(props) {
	return (
		<div className="social-buttons">
			<ul>
				{props.social.map(elem => 
					<SocialLi social={elem} />
				)}
			</ul>
		</div>
	);
}

export default Social;