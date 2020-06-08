import React from 'react';
import './App.css';
import SimpleBar from './components/TabBar'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 710,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  palette: {
    //type: 'dark',
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
    },
    body1: {
      fontSize: "1.25rem",  
    }
  },
  overrides: {
    MuiTab: {
      root: {
        fontSize: 14,
      }
    },
    // MuiTabPanel: {
    //   root: {
          
    //   }  
    // },
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
    },
  }
});

theme.overrides.MuiTab.root = {
    //fontSize: 14,
  '@media (min-width:720px)': {
      fontSize: 16,
  }, 
}

// const theme1 = createMuiTheme({
//   palette: {
//     type: 'dark',
//   }
// });

function App() {
  return (
    <ThemeProvider theme={theme}> 
        <SimpleBar/>
    </ThemeProvider>
  );
}

export default App;