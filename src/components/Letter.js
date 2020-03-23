import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    paper: {
        width: 75
    }
}));

const Letter = (props) => {
    const classes = useStyles();
    return(
        <div onClick={props.onClick}>
            <Paper elevation={2} className={classes.paper}>              
                <Typography  variant="h2" component="h2" align="center">
                    {props.letter}
                </Typography>  
            </Paper>
        </div>
    )
}

export default Letter