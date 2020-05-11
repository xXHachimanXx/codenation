import React from "react";

import Contact from "./Contact";

import "../App.scss";

class Contacts extends React.Component {

	render() {
		return (
			<section className="contacts">
				<article className="contact">
					<span className="contact__avatar" />
					<span className="contact__data">Nome</span>
					<span className="contact__data">Telefone</span>
					<span className="contact__data">País</span>
					<span className="contact__data">Admissão</span>
					<span className="contact__data">Empresa</span>
					<span className="contact__data">Departamento</span>
				</article>

				{this.props.children}
			</section>
		);
	}
}

export default Contacts;
