import React from 'react';
import propTypes from 'prop-types';

const GuestName = props => {
    if (props.isEditing) {
        return (
            <input 
                type="text" 
                value={props.children} 
                onChange={props.handleNameChange}
            />
        );        
    } else {
        return (
            <span>{props.children}</span>
        );
    }
};    
        

GuestName.prototype = {    
    isEditing: propTypes.bool.isRequired,
    handleNameChange: propTypes.func.isRequired,    
}

export default GuestName;