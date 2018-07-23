import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <GuestInputForm
      newGuest={props.newGuest}
      handleNewGuestSubmit={props.handleNewGuestSubmit}
      handleAddGuest={props.handleAddGuest}
    />
  </header>;

Header.PropTypes = {
  newGuest: PropTypes.string.isRequired,
  handleNewGuestSubmit: PropTypes.func.isRequired,
  handleAddGuest: PropTypes.func.isRequired,
}

export default Header;
