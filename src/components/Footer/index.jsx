//STYLES

import './styles/Footer.css';

// SOCIAL MEDIA ICONS :
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
export default function Footer() {
	return (
		<footer className="container footer">
			<div className="logo"></div>
			<div className="footer-links">
				<div className="cl1">
					<h5>Features</h5>
					<a href="#">Link Shortening</a>
					<a href="#">Branded Links</a>
					<a href="#">Analytics</a>
				</div>
				<div className="cl2">
					<h5>Resources</h5>
					<a href="#">Blog</a>
					<a href="#">Developers</a>
					<a href="#">Support</a>
				</div>
				<div className="cl3">
					<h5>Company</h5>
					<a href="#">About</a>
					<a href="#">Our Team</a>
					<a href="#">Careers</a>
					<a href="#">Contact</a>
				</div>
			</div>

			<div className="socialMedia-icons">
				<img src={facebookIcon} alt="facebook" />
				<img src={twitterIcon} alt="twitter" />
				<img src={instagramIcon} alt="pinterest" />
				<img src={pinterestIcon} alt="instagrame" />
			</div>
		</footer>
	);
}
