import React from 'react';
import propTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>    
        <li>
            <GuestName 
                isEditing={props.isEditing}
                handleNameChange={e => props.setName(e.target.value)}>
                {props.name}
            </GuestName>
            <label>
                <input 
                    type="checkbox" 
                    checked={props.isConfirmed} 
                    onChange={props.handleConfirmation}
                /> Confirmed
            </label>
            <button onClick={props.handleEditing}>
                { props.isEditing ? 'save' : 'edit' }
            </button>
            <button>remove</button>
        </li>;

Guest.prototype = {
    name: propTypes.string.isRequired,
    isConfirmed: propTypes.bool.isRequired,
    isEditing: propTypes.bool.isRequired,
    handleConfirmation: propTypes.func.isRequired,
    handleEditing: propTypes.func.isRequired,
    setName: propTypes.func.isRequired,
}

export default Guest;