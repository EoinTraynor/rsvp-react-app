import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest/Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(index)}
          handleEditing={() => props.toggleEditing(index)}
          setName={text => props.setNameAt(text, index)}
          handleRemoveGuest={() => props.removeGuestAt(index)}
        />
      )}
  </ul>;

GuestList.PropTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default GuestList;
