import React from 'react';
import propTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
    <ul>
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
            />
        )}
    </ul>;

GuestList.prototype = {
    guests: propTypes.array.isRequired,
    toggleConfirmation: propTypes.func.isRequired,
    toggleEditing: propTypes.func.isRequired,
    setNameAt: propTypes.func.isRequired,
    isFiltered: propTypes.bool.isRequired,
}

export default GuestList;