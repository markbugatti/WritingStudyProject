import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 20,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    // '&:focus': {
    //   borderRadius: 4,
    //   borderColor: '#80bdff',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    // },
  },
}))(InputBase);


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
    const [age, setAge] = React.useState('');
    const handleChange = event => {
      setAge(event.target.value);
      props.onSelectItem(event.target.value)
      // console.log(event.target.value)
    };
    return(
      //<div>
        <FormControl variant="outlined" className={classes.margin}>
        <InputLabel id="syllables-select-label">{props.letter}</InputLabel>
        <Select
          labelId="syllables-select-label"
          id="syllables=select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>Не вибрано</em></MenuItem>
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
      //</div>
    )
}

export default Syllable;