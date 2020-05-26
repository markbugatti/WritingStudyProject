import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 110,
    maxWidth: 160,
    margin: theme.spacing(1),
  },
  margin: {
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    // fontSize: 16,
    padding: '10px 26px 10px 12px',
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: theme.palette.background.paper,
    },
  },
}))(InputBase);

const BootstrapFormControl = withStyles({
  root: {
    // minWidth: '60px',
    width: '100%',
    // height: '100%'
  }
})(FormControl)

const BootstrapSelect = withStyles({
  root: {
    // minWidth: '80px',
    height: '100%',
    width: "100%",
  }
})(Select)

const BootstrapInputLabel = withStyles((theme) => ({
  root: {
    transform: 'translate(14px, 0px)',
    '&$shrink': {
      transform: 'translate(4px, -7px) scale(0.50)',
    },
  },
  shrink: {
    transform: 'translate(4px, -7px) scale(0.50)',  
    color: theme.palette.text.secondary,
  }, 
}))(InputLabel)

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
      <BootstrapFormControl variant="outlined">
              <BootstrapInputLabel id="syllables-select-label">
                
                <Typography variant="h2" component="h2">
                  {props.letter}
                </Typography>
                {/* {props.letter} */}
              </BootstrapInputLabel>
              <BootstrapSelect
                labelId="syllables-select-label"
                id="syllables=select"
                onChange={handleChange}
                margin="normal"
                input={<BootstrapInput/>}
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
              </BootstrapSelect>
            </BootstrapFormControl>
    )
}

export default Syllable;