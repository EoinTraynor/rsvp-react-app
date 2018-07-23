import React, { Component } from 'react';
import Header from './components/Header/';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    newGuest: '',
    guests: [
      {
        name: 'John',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Dave',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Emma',
        isConfirmed: false,
        isEditing: false,
      },
    ],
  };

  getAllGuests = () => this.state.guests.length;
  getConfirmedGuests = () => this.state.guests.filter(i => i.isConfirmed === true).length;
  getUnconfirmedGuests = () => this.state.guests.filter(i => i.isConfirmed === false).length;
  toggleGuestProperty = (guestIndex, property) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === guestIndex) {
          return {
            ...guest,
            [property]: !guest[property],
          }
        }
        return guest;
        // return [
        //   ...guests,
        //   guests[guestIndex] = {
        //     ...guests[guestIndex],
        //     isConfirmed: !guests[guestIndex].isConfirmed,
        //   },
        // ];
      }),
    });
  toggleConfirmation = index =>
    this.toggleGuestProperty(index, 'isConfirmed');
  toggleEditing = index =>
    this.toggleGuestProperty(index, 'isEditing');
  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered,
    });
  }
  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
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
        }
      ],
      newGuest: '',
    });
  }
  removeGuestAt = removeIndex => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, removeIndex),
        ...this.state.guests.slice(removeIndex + 1),
      ]
      // guests: this.state.guests.filter((guest, index) => {
      //   if(index !== removeIndex) return guest;
      // }),
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
          isFiltered={this.state.isFiltered}
        />
      </div>
    );
  }
}

export default App;
