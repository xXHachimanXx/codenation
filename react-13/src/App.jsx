import React from 'react';


import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";


import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <div className="container">
          <Filters />
        </div>

        <div className="container">
          <Contacts />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
