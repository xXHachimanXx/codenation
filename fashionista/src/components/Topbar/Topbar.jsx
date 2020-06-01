import React from 'react';

import "./Topbar.css";

function Topbar() {
	return (
		<div className="Topbar">
			<header className="header">
				<div className="app__container">

					<a href="/" className="header__logo">
						<img src="../../assets/logo_topbar.png" alt="FASHIONISTA" />	
					</a>
					

					<div className="header__icons">
						<button className="header__icons--search_icon">
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
						<button className="header__icons--cart_icon">
							<i className="fa fa-shopping-cart" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Topbar;