import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';


var synth = window.speechSynthesis;
var gtWindow;

const StyledButton = withStyles((theme) => ({
    root: {
        marginLeft: '10px',
        marginBottom: '10px',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5px',
            marginBottom: '5px',
        },
    }
}))(Button)

class VideoBlock extends Component {
    
    state = {
        play: false,
        soundUrl: '',
    }

    constructor(props) {
        super(props);
        this.onSoundButtonClick = this.onSoundButtonClick.bind(this);
    }

    onPlayPauseButtonClick = (event) => {
        if(this.props.videoSrc) {
            if(this.state.play)
            {
                this.setState({play: false});
                this.refs.vidRef.pause();
            }
            else {
                this.setState({play: true});
                this.refs.vidRef.play();
            }
        }
    }

    OnVideoPlay = (event) => {
        if(!this.state.play)
        {
            this.setState({play: true});
        }
    }

    OnVideoPause = (event) => {
        if(this.state.play)
        {
            this.setState({play: false});
        }
    }

    onSoundButtonClick(event) {
        //var utterThis = new SpeechSynthesisUtterance('hello');
        //console.log(synth.getVoices());
        //synth.speak(utterThis);
        gtWindow = window.open("https://translate.google.com/?source=gtx#view=home&op=translate&sl=uk&tl=en&text=" + this.props.text, "google translate", "");
    }

    render() {
        return(
            <Grid container justify="center">
                <Grid item xs={12} md={8} xl={6}>
                    <Paper elevation={3}>
                        <Grid container spacing={0} justify="center">
                            <Grid item xs={11}>
                                <video  
                                    ref="vidRef"
                                    width="100%"
                                    src={this.props.videoSrc} 
                                    onPlay={this.OnVideoPlay}
                                    onPause={this.OnVideoPause}
                                    loop autoPlay muted/>
                                {/* <video ref="vidRef" src={this.props.videoSrc} onPlay={this.OnVideoPlay} onPause={this.OnVideoPause} loop autoPlay muted/> */}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <StyledButton
                                    variant="contained"
                                    color="primary"
                                    startIcon={
                                    this.state.play ?
                                    (<PauseCircleFilledIcon/>)
                                    : (<PlayCircleFilledIcon/>)
                                    }
                                    onClick={this.onPlayPauseButtonClick}
                                    >
                                    {this.props.t('videoBlock.Play/pause')}
                                </StyledButton>        
                            </Grid>
                            <Grid item>
                                <StyledButton
                                    variant="contained"
                                    color="default"
                                    startIcon={<VolumeUpIcon/>}
                                    onClick={this.onSoundButtonClick}
                                >
                                    {this.props.t('videoBlock.Pronounce')}
                                </StyledButton>
                            </Grid>
                            {/* <Grid item>
                                {/*  make slider here
                            </Grid> */}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withTranslation()(VideoBlock);