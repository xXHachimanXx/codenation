import React from 'react';
import "../App.scss";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.data = props.data;
    
    this.id = props.data.id;
    this.name = props.data.name;
    this.avatar = props.data.avatar;
    this.company = props.data.company;
    this.department = props.data.department;
    this.admissionDate = this.formatDate(props.data.admissionDate);
    this.phone = props.data.phone;
    this.country = props.data.country;
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
        <article className="contact" data-testid="contact">
          <span className="contact__avatar">
            <img src={this.avatar} alt={this.name} />
          </span>
          <span className="contact__data" data-testid="contact-name" >{this.name}</span>
          <span className="contact__data"data-testid="contact-phone">{this.phone}</span>
          <span className="contact__data" data-testid="contact-country">{this.country}</span>
          <span className="contact__data" data-testid="contact-date">{this.admissionDate}</span>
          <span className="contact__data" data-testid="contact-company">{this.company}</span>
          <span className="contact__data" data-testid="contact-department">{this.department}</span>
        </article>      
    );
  }
}

export default Contact;
