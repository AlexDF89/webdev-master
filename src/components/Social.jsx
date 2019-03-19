import React from 'react';

import SocialLi from './SocialLi';
import logoGit from '../images/github_icon.svg';
import logoFL from '../images/fl_icon.png';
import logoVK from '../images/vk_icon.svg';

function Social(props) {
	return (
		<div className="social-buttons">
			<ul className="social-ul">
				  <SocialLi href="https://github.com/AlexDF89" imgSrc={logoGit} classLi="icon-git" text={props.text} />
				  <SocialLi href="https://www.fl.ru/users/alexdf89/" imgSrc={logoFL} classLi="icon-fl" text={props.text} />
				  <SocialLi href="https://vk.com/id12591211" imgSrc={logoVK} classLi="icon-vk" text={props.text} />
			</ul>
		</div>
	);
}

export default Social;