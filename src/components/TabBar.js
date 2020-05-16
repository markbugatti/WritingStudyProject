import React from 'react';

import * as contentful from 'contentful';

import { useTranslation } from "react-i18next";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


import Typography from '@material-ui/core/Typography';

// import LanguageSelector from './LanguageSelector';
import LanguageSelector from './LanguageSelector1';

import AlphabetList from './AlphabetList';
import SyllableList from './SyllableList';
import WordList from './WordList';


const SPACE_ID = '7kwcorev18qn'
const ACCESS_TOKET = 'iIqFNbMVqZWVkoVvJ_c6htofPLk3pqXyReWLLnZ7TQ0'

const theme = createMuiTheme({
  palette: {
    background: {
      //paper: "#d4d4d4",
      //default: "#e57373",
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.87)",
    }
  },
  typography: {
    fontFamily: 'Times New Roman, Times, serif',
    //fontWeightRegular: 700,
    //fontWeightMedium: 700,
    //subtitle 1 is only used for letters list in "syllable" tab.
    subtitle1: {
      fontSize: "2rem",

    }
  },
  overrides: {
    MuiTab: {
      root: {
        fontSize: 14,
      }
    },
    MuiInputBase: {
      root: {
        fontSize: "3.2rem"
      }
    },
    MuiSelect: {
      root: {
        //fontSize: "1.6rem"
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: "2rem",
      }
    }
  }
});

theme.overrides.MuiTab.root = {
  fontSize: 14,
  '@media (min-width:600px)': {
      fontSize: 16,
  }, 
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SimpleTabs() {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKET
    })
  
  const { t, i18n } = useTranslation();

  //const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(i18n);
  };
  
  
  return (
    <ThemeProvider theme={theme}>
    {/* <div className={classes.root} style={{backgroundColor: '#7f7f7f00'}}> */}
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={t('tabBar.Instraction')} {...a11yProps(0)} disabled/>
          <Tab label={t('tabBar.Letter')} {...a11yProps(1)} />
          <Tab label={t('tabBar.Syllable')} {...a11yProps(2)}/>
          <Tab label={t('tabBar.Words')} {...a11yProps(3)}/>
          <LanguageSelector/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* place for instruction */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AlphabetList client={client}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SyllableList client={client}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WordList client={client}/>
      </TabPanel>
      
    </div>
    </ThemeProvider>
  );
}

export default SimpleTabs;