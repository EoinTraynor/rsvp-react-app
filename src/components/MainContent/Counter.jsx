import React from 'react';
import PropTypes from 'prop-types';

const Counter = props =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Confirmed:</td>
        <td>{props.numConfirmed}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.numUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.numTotal}</td>
      </tr>
    </tbody>
  </table>;

Counter.PropTypes = {
  numConfirmed: PropTypes.number.isRequired,
  numUnconfirmed: PropTypes.number.isRequired,
  numTotal: PropTypes.number.isRequired,
}

export default Counter;
