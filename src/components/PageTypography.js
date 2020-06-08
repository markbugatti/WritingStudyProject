import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(1),
        }
    },
}));

export default function TabPanel(props) {
    const classes = useStyles();

    const { children, value, index, ...other } = props;
    
    return (
      <Typography
        //class={classes.root}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box className={[classes.root, "TabBar-container"].join(' ')} height="100%">{children}</Box>}
      </Typography>
    );
  }
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};