import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Syllable(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    })
    
    const handleChange = event => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


    
    return(
        <FormControl variant="outlined" className={classes.formControl}>
          {/* вставить конкретную букву */}
        <InputLabel htmlFor="outlined-age-native-simple">{props.letter}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
          
        >
          {/* Вставить конкретные склады */}
            {
              props.syllables.map(syllable => (
                <option>{syllable}</option>
              )
              )
            }
        </Select>
      </FormControl>
    )
}