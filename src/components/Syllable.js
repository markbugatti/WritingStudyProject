import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'
import { Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'

const inputTheme = createMuiTheme({
  typography: {
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: 24,
  }
})


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 130,
      //minHeight: 60,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    }
  }));

const Syllable = (props) => {
    const classes = useStyles();
    const handleChange = event => {
      props.onSelectItem(event.target.value)
      // console.log(event.target.value)
    };
    return(
        <Paper>
          <ThemeProvider theme={inputTheme}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="syllables-select-label">
                {props.letter}
              </InputLabel>
              <Select
                labelId="syllables-select-label"
                id="syllables=select"
                onChange={handleChange}
                margin="normal"
              >
                <MenuItem value="">
                  Не вибрано
                </MenuItem>
                {
                  props.syllables.map((syllable, i) => {
                    return (
                      <MenuItem key={i} value={syllable.fields.transcription}>
                        {syllable.fields.name}
                      </MenuItem>
                      );
                    }
                  )
                }
              </Select>
            </FormControl>
          </ThemeProvider>
        </Paper>
    )
}

export default Syllable;