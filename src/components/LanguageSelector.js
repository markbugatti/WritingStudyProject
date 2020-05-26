import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import { useTranslation } from "react-i18next";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

export default function LangulangSelect() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [lang, setLang] = React.useState(i18n.language);
    const handleChange = (event) => {
        setLang(event.target.value);
    }

    return(
        //<FormControl className={classes.margin}>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">lang</InputLabel>
            <NativeSelect
                id="demo-customized-select-native"
                value={lang}
                onChange={handleChange}
                input={<BootstrapInput />}
            >
                {/* <option aria-label="None" value="" /> */}
                <option value={"en"}>Eng</option>
                <option value={"ru"}>Rus</option>
                <option value={"ua"}>Ukr</option>
            </NativeSelect>
        </FormControl>
    )
}