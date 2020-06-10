import React from 'react';

import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0),
        padding: theme.spacing(2),
        minHeight: '100px',
        // [theme.breakpoints.up('xs')]: {
        //     margin: '0px',
        // }
    },
}));

function Manual() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container justify="center">
        <Grid item xs={12} sm={8}>
            <Paper className={classes.root} elevation={3}> 
                {/* First Paragraph */}
                <Typography variant="subtitle1">
                    {t('Manual.LetterTitle')}
                </Typography> 
                <Typography variant="body1" >
                    {t('Manual.LetterBody.Paragraph1')} 
                    <br/>
                    {t('Manual.LetterBody.Usage')}
                    <br/>
                    <ul>
                        <li>{t('Manual.LetterBody.Point1')}</li>
                    </ul>
                </Typography>
                {/* Second Paragraph */}
                <Typography variant="subtitle1">
                    {t('Manual.SyllableTitle')}
                </Typography> 
                <Typography variant="body1" >
                    {t('Manual.SyllableBody.Paragraph1')} 
                    <br/>
                    {t('Manual.SyllableBody.Usage')}
                    <br/>
                    <ul>
                        <li>{t('Manual.SyllableBody.Point1')}</li>
                        <li>{t('Manual.SyllableBody.Point2')}</li>
                    </ul> 
                </Typography>
                {/* Third Paragraph */}
                <Typography variant="subtitle1">
                    {t('Manual.WordTitle')}
                </Typography> 
                <Typography variant="body1" >
                    {t('Manual.WordBody.Paragraph1')} 
                    <br/>
                    {t('Manual.WordBody.Usage')} 
                    <br/>
                    <ul>
                        <li>{t('Manual.WordBody.Point1')}</li>
                    </ul>
                </Typography>      
            </Paper>
        </Grid>
        </Grid>
    )
}

export default Manual;