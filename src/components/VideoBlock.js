import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

// class VideoBlock extends Component {
//     render() {
//         return(
//             <Paper>

//             </Paper>    
//         )
//     }
// }

class VideoBlock extends Component {
    state = {
        play: true,
        videoUrl: '',
        soundUrl: ''
    }
    
    onPlayPauseButtonClick = (event) => {
        this.state.play ? this.setState({play: false}) : this.setState({play: true});
    }

    render() {
        return(
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <video width="150" height="70">

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
                                            (<PlayCircleFilledIcon/>)
                                            : ( <PauseCircleFilledIcon/> )
                                            } 
                                            onClick={this.onPlayPauseButtonClick}>
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
                </Grid>
            </Grid>
        ) 
    }   
}

export default VideoBlock;