import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Word from './Word';
import VideoBlock from './VideoBlock';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

const StyledPaper = withStyles({
    root: {
        background: 'transparent',
        borderRadius: 3,
        border: 2,
        borderColor: 'black',
        color: 'white',
        //height: 48,
        padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',       
    }
})(Paper)

class WordList extends Component {
    state = {
        words: [],
        VideoURL: ''
    }
    
    constructor(props) {
        super(props);
        this.getVideo = this.getVideo.bind(this);
        this.getWords();
    }

    getWords() {
        this.props.client.getEntries({
            content_type: 'word',
        })
        .then((entries) => {
            this.setState({words: entries.items})
        })
    }

    getVideo (word) {
        this.setState(() => (
            {
                VideoURL: process.env.PUBLIC_URL + '/assets/words/' + word.fields.eng + '.mp4'
            }
        ))
    }

    render() {
        return(
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={2} justify="center">
                    {
                        this.state.words ? this.state.words.map(word => (
                            <Grid item xs={12} sm={7} md={12} key={word.sys.id}>
                                {/* <StyledPaper variant="outlined">     */}
                                    <Word word={word} onSelectItem={this.getVideo}/>
                                {/* </StyledPaper> */}
                            </Grid>
                            )
                        ) : null
                    }
                    </Grid> 
                </Grid>
                <Grid item xs={12}>
                    <VideoBlock videoSrc={this.state.VideoURL}/>
                </Grid>
            </Grid>
        )
    }
}

export default WordList;