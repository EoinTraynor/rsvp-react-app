import React, { Component } from 'react';
import Header from './components/Header/';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    newGuest: '',
    guests: [],
    uniqueIdCount: 0,
  };

  getAllGuests = () => this.state.guests.length;
  getConfirmedGuests = () => this.state.guests.filter(i => i.isConfirmed === true).length;
  getUnconfirmedGuests = () => this.state.guests.filter(i => i.isConfirmed === false).length;
  toggleGuestProperty = (id, property) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property],
          }
        }
        return guest;
      }),
    });
  toggleConfirmation = id =>
    this.toggleGuestProperty(id, 'isConfirmed');
  toggleEditing = id =>
    this.toggleGuestProperty(id, 'isEditing');
  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered,
    });
  }
  setNameAt = (name, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      }),
    });
  newGuestSubmit = e => {
    this.setState({
      newGuest: e.target.value,
    });
  }
  addGuest = e => {
    e.preventDefault();
    this.setState({
      guests: [
        ...this.state.guests,
        {
          name: this.state.newGuest,
          isConfirmed: false,
          isEditing: false,
          id: this.state.uniqueIdCount,
        }
      ],
      newGuest: '',
      uniqueIdCount: this.state.uniqueIdCount+1,
    });
  }
  removeGuestAt = id => {
    this.setState({
      guests: this.state.guests.filter((guest) => {
        if(guest.id !== id) return guest;
        return null;
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          newGuest={this.state.newGuest}
          handleNewGuestSubmit={this.newGuestSubmit}
          handleAddGuest={this.addGuest}
        />
        <MainContent
          numConfirmed={this.getConfirmedGuests()}
          numUnconfirmed={this.getUnconfirmedGuests()}
          numTotal={this.getAllGuests()}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.newGuest}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}

export default App;
