import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AlphabetList from './AlphabetList';
import SyllableList from './SyllableList';
import WordList from './WordList';
import * as contentful from 'contentful';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const SPACE_ID = '7kwcorev18qn'
const ACCESS_TOKET = 'iIqFNbMVqZWVkoVvJ_c6htofPLk3pqXyReWLLnZ7TQ0'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Times New Roman, Times, serif',
  },
});

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKET
    })
  

  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root} style={{backgroundColor: '#7f7f7f00'}}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Інструкція" {...a11yProps(0)} disabled/>
          <Tab label="Літери" {...a11yProps(1)} />
          <Tab label="Склади" {...a11yProps(2)}/>
          <Tab label="Слова" {...a11yProps(3)}/>
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