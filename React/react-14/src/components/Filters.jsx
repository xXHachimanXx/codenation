import React from 'react';

import "../App.scss";

class Filters extends React.Component {	

	constructor(props)
	{
		super(props);
		this.getSearchText = props.getSearchText;
		this.getSortKey = props.getSortKey;

		this.handleChangeSearch = this.handleChangeSearch.bind(this);
		this.handleChangeSortKey = this.handleChangeSortKey.bind(this);
	}
	
	async handleChangeSearch(event)	
	{
		event.preventDefault();		
		const searchText = event.target.value.toLowerCase();

		await this.getSearchText(searchText);
	}

	handleChangeSortKey(event)
	{
		event.preventDefault();
		const sortText = event.target.value;
		
		this.getSortKey(sortText);
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters" >
					<div className="filters__search" >
						<input
							type="text"
							className="filters__search__input" placeholder="Pesquisar"
							onChange={this.handleChangeSearch}							
						/>

						<button className="filters__search__icon" onClick={this.handleChangeSearch}>
							<i className="fa fa-search" />
						</button>
					</div>

					<button className="filters__item is-selected" value="name" onClick={this.handleChangeSortKey}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" value="country" onClick={this.handleChangeSortKey}>
						País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" value="company" onClick={this.handleChangeSortKey}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" value="department" onClick={this.handleChangeSortKey}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" value="admissionDate" onClick={this.handleChangeSortKey}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
