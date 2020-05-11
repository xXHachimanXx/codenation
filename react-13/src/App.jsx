import React from 'react';

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import './App.scss';

const URL_TO_FETCH = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { contactList: [] };
  }

  componentDidMount() {
    const database = fetch(URL_TO_FETCH, { method: 'get' })
      .then((res) => res.json())
      .then( (res) => this.setState({
        contactList: res
      }))
      .catch((err) => console.warn(err));
  }

  render() {

    const {contactList} = this.state;

    return (
      <React.Fragment>
        <Topbar />

        <div className="container">
          <Filters />
        </div>

        <div className="container">
          <Contacts>{
            contactList.map((contact) => (
              <Contact
                key={contact.id}
                name={contact.name}
                avatar={contact.avatar}
                company={contact.company}
                departament={contact.departament}
                admissionDate={contact.admissionDate}
                phone={contact.phone}
                country={contact.country}
              />
            ))}</Contacts>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
