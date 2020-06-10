// Разработка на основе https://material-ui.com/components/app-bar/#app-bar

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";


import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import { Toolbar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';

import CountryFlag from 'react-country-flag';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,  
  }, 
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function LanguageSelector() {
    const classes = useStyles();     
    const { t, i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
    const handleMenuClose = (event) => {
        setAnchorEl(null);
        handleMobileMenuClose();
        selectLanguage(event.currentTarget.innerText);
    };

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const selectLanguage = (value) => {
      let lang = "";
      if(value === "English") {
        lang = "en";
      } else if (value === "Русский") {
        lang = "ru";
      } else if (value === "Українська") {
        lang = "ua";
      }
      i18n.changeLanguage(lang);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
            {/* Вставить сюда языки */}
          {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
          <MenuItem onClick={handleMenuClose} >
          <IconButton
            aria-label="en"
            //aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <CountryFlag
              countryCode="GB"
              svg
            />
          </IconButton>  
            English
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
          <IconButton
            aria-label="ru"
            //aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <CountryFlag
              countryCode="RU"
              svg
            />
          </IconButton>  
            Русский
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
          <IconButton
            aria-label="ua"
            //aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <CountryFlag
              countryCode="UA"
              svg
            />
          </IconButton>  
            Українська
          </MenuItem>




          {/*<MenuItem onClick={handleMenuClose}>My account</MenuItem>*/}
        </Menu>
    );
    
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          {t("tabBar.Language")}
        </MenuItem>
      </Menu>
    );


    return(
      <div className={classes.grow}>
        <Toolbar>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    )
}