import React from 'react';
import propTypes from 'prop-types';

const PendingGuest = props => {   
    if(props.name){
        return(
            <li className="pending">
                <span>                 
                    {props.name}
                </span>            
            </li>
        );
    }
    return null;
}
PendingGuest.propTypes = {
    name: propTypes.string.isRequired,
}

export default PendingGuest;