import React from 'react';
import PropTypes from 'prop-types';

const ConfirmFilter = props =>
  <div>
    <h2>Invitees</h2>
    <label>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered}
      />
      Show only confirmed
    </label>
  </div>;

ConfirmFilter.PropTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
}

export default ConfirmFilter;
