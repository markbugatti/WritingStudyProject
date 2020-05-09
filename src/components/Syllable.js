import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles({
  formControl: {
    minWidth: 110,
    maxWidth: 160,
  },
});

const Syllable = (props) => {
    const classes = useStyles();
    const handleChange = (e) => {
        // выставить остальные пункты меню в состояние "Не выбрано"
        props.onSelectItem(e.target.value);
    };

    function calcValue() {
      var found = props.syllables.find(props.currentSyllableName.fields.name)
      if(found !== undefined) {
        return found;
      }
      else {
        return "";
      }
    }

    return(
        <div>
        <Paper>
          {/* <ThemeProvider theme={inputTheme}> */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="syllables-select-label">
                <Typography variant="subtitle1">{props.letter}</Typography>
                {/* {props.letter} */}
              </InputLabel>
              <Select
                labelId="syllables-select-label"
                id="syllables=select"
                onChange={handleChange}
                margin="normal"
                //value={ any from syllables == props.current syllable ? current syllable element : null}
              >    
                {
                  props.syllables.map((syllable, i) => {
                    return (
                      <MenuItem key={i} value={syllable}>
                        {syllable.fields.name}
                      </MenuItem>
                      );
                    }
                  )
                }
              </Select>
            </FormControl>
          {/* </ThemeProvider> */}
        </Paper>
        </div>
    )
}

export default Syllable;