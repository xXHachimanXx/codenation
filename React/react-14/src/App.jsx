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
    this.state = { contactList: [], filter: "name", search: "", contactListFiltered: [] };
  }

  componentDidMount() {
    const database = fetch(URL_TO_FETCH, { method: 'get' });
    database
      .then((res) => res.json())
      .then((res) => this.setState({
        contactList: res,
        contactListFiltered: res
      }))
      .catch((err) => console.warn(err));
  }

  searchFilter(contact, searchText) {
    return (
      contact.name.toLowerCase().includes(searchText)
    );
  }

  async handleSearchContact(searchText) {
    this.setState({ search: searchText });

    if (searchText !== "" && searchText !== undefined) {
      await this.setState({
        contactListFiltered: this.state.contactList.filter(
          (contact) => (this.searchFilter(contact, searchText))
        )
      });
    }
    else {
      this.setState({ contactListFiltered: this.state.contactList });
    }
  }

  handleSortContacts(sortKey) {
    this.setState({ filter: sortKey });

    if (sortKey !== "" && sortKey !== undefined) {
      const newContactList = this.state.contactListFiltered;

      newContactList.sort(
        (c1, c2) => {
          const x = c1[sortKey].toLowerCase();
          const y = c2[sortKey].toLowerCase();

          return x > y ? 1 : x < y ? -1 : 0;
        }
      );

      this.setState({ contactListFiltered: newContactList });

    }
    else {
      this.setState({ contactListFiltered: this.state.contactList });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <Topbar />
          <Filters
            getSearchText={this.handleSearchContact.bind(this)}
            getSortKey={this.handleSortContacts.bind(this)}
          />

          <Contacts>
            {this.state.contactListFiltered
              .map((contact) => (
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
              ))}
          </Contacts>
        </div>
      </React.Fragment>
    );
  }
}
export default App;

