import React from 'react';

import "../App.scss";

class SearchForm extends React.Component {

	render() {
		return (
			<form className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar" />

				<button className="filters__search__icon">
					<i className="fa fa-search" />
				</button>
			</form>
		);
	}
}

export default SearchForm;
