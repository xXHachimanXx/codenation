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
    const database = fetch(URL_TO_FETCH, { method: 'get' });
    database
      .then((res) => res.json())
      .then((res) => this.setState({
        contactList: res
      }))
      .catch((err) => console.warn(err));
  }

  /*
  handleSortContacts(key = 'Name') {
    if (key === 'Name') {
      this.setState(oldState => oldState.contactList.sort((x, y) => x.name > y.name));
    } else if (key === 'Country') {
      this.setState(oldState => oldState.contactList.sort((x, y) => x.country > y.country));
    } else if (key === 'Company') {
      this.setState(oldState => oldState.contactList.sort((x, y) => x.company > y.company));
    } else if (key === 'Departament') {
      this.setState(oldState => oldState.contactList.sort((x, y) => x.departament > y.departament));
    } else if (key === 'AdmissionDate') {
      this.setState(oldState => oldState.contactList.sort((x, y) => x.admissionDate > y.admissionDate));
    }
  }
  */

  render() {

    return (
      <React.Fragment>
        <Topbar />
        <Filters />

        <Contacts>{
          this.state.contactList.map((contact) => (
            <Contact
              key={contact.id}
              name={contact.name}
              avatar={contact.avatar}
              company={contact.company}
              department={contact.department}
              admissionDate={contact.admissionDate}
              phone={contact.phone}
              country={contact.country}
            />
          ))}</Contacts>
      </React.Fragment>
    );
  }
}

export default App;
