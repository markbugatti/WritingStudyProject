import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Letter from './Letter'
import VideoBlock from './VideoBlock'
import Typography from '@material-ui/core/Typography';

class AlphabetList extends Component {
    state = {
        alphabet: [],
        VideoURL: ''
    }
    
    constructor(props) {
        super(props);
        this.getLetters();
        this.getVideo = this.getVideo.bind(this);
    }
    
    getLetters = () => {
        this.props.client.getEntries({
            content_type: 'course',
            order: 'fields.id'
        })
        .then((entries) => {
            this.setState({alphabet: entries.items})
            //console.log(entries.items)
        })
    }

    getVideo (letter) {
        this.setState(() => (
            {
                VideoURL: process.env.PUBLIC_URL + '/assets/letters/' + letter.fields.transcription + "_" + letter.fields.categories[0].fields.title + '.mp4'
            }
        ))
    }

    render() {
        return(
            <div>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Typography  variant="h2" component="h2" align="center">
                            <Grid container spacing={1}> 
                            {this.state.alphabet.map(letter => (
                                <Grid key={letter.sys.id} item xs={3} sm={2} md={1}>
                                    <Letter letter={letter} onClick={this.getVideo}/>
                                </Grid>
                            ))}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <VideoBlock videoSrc={this.state.VideoURL}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AlphabetList;