import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const inputTheme = createMuiTheme({
    typography: {
      fontFamily: 'Times New Roman, Times, serif',
      fontSize: 24,
    }
  })



  
const Word = (props) => {
    const handleClick = () => {
        props.onSelectItem(props.word)
    };
    return(
        //<Typography  variant="h2" component="h2" align="center">
        <Grid container spacing={1}>
            <Grid item xs={12} sm={4}  >
                <Paper><div onClick={handleClick}><Typography variant="h2" component="h2" align="center">{props.word.fields.ukr}</Typography></div></Paper>
            </Grid>            
            <Grid item xs={12} sm={4}>
                <Paper><div onClick={handleClick}><Typography variant="h2" component="h2" align="center">{props.word.fields.eng}</Typography></div></Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper><div onClick={handleClick}><Typography variant="h2" component="h2" align="center">{props.word.fields.chi}</Typography></div></Paper>
            </Grid>
        </Grid>
        //</Typography>
    )
}

export default Word;