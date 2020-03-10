import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    paper: {
        width: 75
    }
}));


const alphabet = [  'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Ґ', 'ґ', 'Д', 'д',
                    'Е', 'е', 'Є', 'є', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'І', 'і',
                    'Ї', 'ї', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о',
                    'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф',
                    'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'Щ', 'Ь', 'ь',
                    'Ю', 'ю', 'Я', 'я']

const Letter = (props) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return(
        // <Grid container spacing={spacing}>
        // {alphabet.map(letter => (
        //     <Grid item>
        //         <Paper elevation="3" className={classes.paper}>              
        //             <Typography  variant="h1" component="h1" align="center">
        //                 {letter}
        //             </Typography>  
        //         </Paper>
        //     </Grid>
        // ))}
        // </Grid>

        <Paper elevation="2" className={classes.paper}>              
            <Typography  variant="h2" component="h2" align="center">
                {props.letter}
            </Typography>  
        </Paper>
    )
}

export default Letter