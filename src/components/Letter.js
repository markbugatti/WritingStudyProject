import React from 'react';
import Paper from '@material-ui/core/Paper';

const Letter = (props) => {
    return(
        <div onClick={() => props.onClick(props.letter)}>
            <Paper elevation={3}>              
                {props.letter.fields.title}
            </Paper>
        </div>
    )
}

export default Letter