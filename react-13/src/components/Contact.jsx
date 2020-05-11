import React from 'react';
import "../App.scss";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.avatar = props.avatar;
    this.company = props.company;
    this.departament = props.departament;
    this.admissionDate = this.formatDate(props.admissionDate);
    this.phone = props.phone;
    this.country = props.country;
  }

  // Formatar data
  formatDate(date) {
    var formatedDate = new Date(date);
    var year = formatedDate.getFullYear();
    var month = (formatedDate.getMonth() + 1).toString().padStart(2, '0');
    var day = formatedDate.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
  }

  render() {
    return (
      <article className="contact">
        <span className="contact__avatar">
          <img src={this.avatar} alt={this.name}/>
        </span>
        <span className="contact__data">{this.name}</span>
        <span className="contact__data">{this.phone}</span>
        <span className="contact__data">{this.country}</span>
        <span className="contact__data">{this.admissionDate}</span>
        <span className="contact__data">{this.company}</span>
        <span className="contact__data">{this.departament}</span>
      </article>
    );
  }
}

export default Contact;
