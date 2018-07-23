import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
  <form>
    <input
      type="text"
      value={props.newGuest}
      onChange={e => props.handleNewGuestSubmit(e)}
      placeholder="Invite Someone"
    />
    <button
      type="submit"
      name="submit"
      value="submit"
      onClick={e => props.handleAddGuest(e)}
    >Submit
            </button>
  </form>;

GuestInputForm.PropTypes = {
  newGuest: PropTypes.string.isRequired,
  handleNewGuestSubmit: PropTypes.func.isRequired,
  handleAddGuest: PropTypes.func.isRequired,
}

export default GuestInputForm;
