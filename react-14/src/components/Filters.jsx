import React from 'react';

import SearchForm from "./SearchForm";

import "../App.scss";

class Filters extends React.Component {
	/*
	constructor(props) {
		super(props);
	}

	
	sortBy(e, comparable) {
		e.preventDefault();
		this.props.handlerSortContacts(comparable);		
	}*/

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters" >
					<SearchForm />

					<button className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
