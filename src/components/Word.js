import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const inputTheme = createMuiTheme({
    typography: {
      fontFamily: 'Times New Roman, Times, serif',
      fontSize: 22,
    }
  })

// in future theme will adjust responsive font size
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 14,
        '@media (min-width: 600)': {
            fontSize: '1.5rem',
        },
        '@media (min-width: 960)': {
            fontSize: 14
        },
    },
}
);

const Word = (props) => {
    const handleClick = () => {
        props.onSelectItem(props.word)
    };
    return(
        
        //<ThemeProvider theme={inputTheme}>
        <Typography  variant="h2" component="h2" align="center">
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}  >
                <Paper><div onClick={handleClick}>{props.word.fields.ukr}</div></Paper>
            </Grid>            
            <Grid item xs={12} md={4}>
                <Paper><div onClick={handleClick}>{props.word.fields.eng}</div></Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper><div onClick={handleClick}>{props.word.fields.chi}</div></Paper>
            </Grid>
        </Grid>
        </Typography>
        //</ThemeProvider>
    )
}

export default Word;