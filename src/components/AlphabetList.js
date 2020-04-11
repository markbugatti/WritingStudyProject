import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Letter from './Letter'
import VideoBlock from './VideoBlock'


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
            console.log(entries.items)
        })
    }

    getVideo (letter) {
        this.setState(() => (
            {
                VideoURL: process.env.PUBLIC_URL + '/assets/letters/' + letter.fields.title + "_" + letter.fields.categories[0].fields.title + '.mp4'
            }
        ))
    }

    render() {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <Grid container spacing={1} > 
                        {this.state.alphabet.map(letter => (
                            <Grid key={letter.sys.id} item>
                                <Letter letter={letter} onClick={this.getVideo}/>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={8} xl={6}>
                        <VideoBlock videoSrc={this.state.VideoURL}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AlphabetList;