import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

class VideoBlock extends Component {
    state = {
        play: false,
        soundUrl: ''
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

    render() {
        return(
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <video ref="vidRef" width="100%" height="100%" src={this.props.videoSrc} onPlay={this.OnVideoPlay} onPause={this.OnVideoPause} loop autoPlay>

                        </video>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    startIcon={
                                    this.state.play ? 
                                    (<PauseCircleFilledIcon/>)
                                    : (<PlayCircleFilledIcon/>)
                                    } 
                                    onClick={this.onPlayPauseButtonClick}
                                    >
                                    Play/Pause
                                </Button>
                            </Grid>
                            <Grid item>
                                {/*  make slider here*/}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>    
                    <Grid item xs={12}>
                        <Button 
                            variant="contained"
                            color="default"
                            startIcon={<VolumeUpIcon/>}
                        >
                            Sound
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        ) 
    }   
}

export default VideoBlock;