import React from 'react';
import PropTypes from 'prop-types';
import ConfirmFilter from './ConfirmFilter';
import Counter from './Counter';
import GuestList from './GuestList/GuestList';

const MainContent = props =>
  <div className="main">
    <ConfirmFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      numConfirmed={props.numConfirmed}
      numUnconfirmed={props.numUnconfirmed}
      numTotal={props.numTotal}
    />
    <GuestList
      guests={props.guests}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuestAt={props.removeGuestAt}
      pendingGuest={props.pendingGuest}
    />
  </div>

MainContent.PropTypes = {
  numConfirmed: PropTypes.number.isRequired,
  numUnconfirmed: PropTypes.number.isRequired,
  numTotal: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
}

export default MainContent;
