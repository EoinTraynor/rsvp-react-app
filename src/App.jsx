import React, { Component } from 'react';
import GuestList from './components/GuestList';

class App extends Component {

  state = {
    isFiltered: false,
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
        isEditing: true,
      },
    ], 
  };

  getAllGuests = () => this.state.guests.length;
  getConfirmedGuests = () => this.state.guests.map(i => i.isConfirmed === true).length;  
  getUnconfirmedGuests = () => this.state.guests.map(i => i.isConfirmed === false).length;

  
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

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input 
              type="checkbox" 
              onChange={this.toggleFilter}
              checked={this.state.isFiltered}
            /> Only show confirmed
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList 
          guests={this.state.guests} 
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setNameAt={this.setNameAt}  
          isFiltered={this.state.isFiltered}
        />
      </div>
    </div>
    );
  }
}

export default App;
