import React from 'react';

import * as contentful from 'contentful';

import { useTranslation } from "react-i18next";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LanguageSelector from './LanguageSelector';

import TabPanel from './PageTypography';
import Manual from './Manual';
import AlphabetList from './AlphabetList';
import SyllableList from './SyllableList';
import WordList from './WordList';


const SPACE_ID = '7kwcorev18qn'
const ACCESS_TOKET = 'iIqFNbMVqZWVkoVvJ_c6htofPLk3pqXyReWLLnZ7TQ0'

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

  const { t } = useTranslation();

  //const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //console.log(i18n);
  };
  
  
  return (
      <div id="tab-bar">
        <AppBar position="static">
          <Tabs value={value} 
                onChange={handleChange}
                aria-label="simple tabs example"
                variant="scrollable">
            <Tab label={t('tabBar.Instraction')} {...a11yProps(0)}/>
            <Tab label={t('tabBar.Letter')} {...a11yProps(1)} />
            <Tab label={t('tabBar.Syllable')} {...a11yProps(2)}/>
            <Tab label={t('tabBar.Words')} {...a11yProps(3)}/>
            <LanguageSelector/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Manual/>
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
  );
}

export default SimpleTabs;