import React, {Component} from 'react';
import Syllable from './Syllable'
import VideoBlock from './VideoBlock'
import Grid from '@material-ui/core/Grid'

class SyllableList extends Component {
    state = {
        syllables: [],
        videoURL: ''
    }

    consonants = []

    constructor (props) {
        super(props);
        this.getConsonants();
        this.getSyllables();
        this.getVideo = this.getVideo.bind(this);
    }

    isLetter = (letter, syllable) => {
        letter.fields.name.includes(syllable)
    }

    isConsonant(letter) {
        try {
            if(letter.fields.categories[1].fields.title === "consonant") return true;
        }
        catch {
            return false;
        }
    }

    getConsonants = () => {
        this.props.client.getEntries({
            content_type: 'course',
        }
        )
        .then((albhabet) => {
            this.consonants = albhabet.items.filter(this.isConsonant);
            //this.setState({consonants: array})
        })    
    }

    getSyllables = () => {
        this.props.client.getEntries({
            content_type: 'syllable',
        }
        )
        .then((entries) => {
            this.setState({syllables: entries.items})
            //console.log("sylables: " + this.state.syllables);
        })  
        
    } 

    getVideo (name) {
        this.setState(() => (
            {
                videoURL: process.env.PUBLIC_URL + '/assets/syllables/' + name + '.mp4'
            }
            ), () => {
                console.log(this.state.videoURL)
                console.log(process.env.PUBLIC_URL)
            } 
        )
    }

    render() {
        return (                
            <div>
                <Grid  container spacing={2}>
                    <Grid item lg={12}>
                        <Grid container spacing={1} > 
                        {this.consonants.map(letter => (
                            <Grid key={letter.sys.id} item>
                                <Syllable letter={letter.fields.title} syllables={this.state.syllables.filter(item => item.fields.name.includes(letter.fields.title))}
                                    onSelectItem={this.getVideo}/>
                            </Grid>)
                        )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={8} xl={6}>
                        <VideoBlock videoSrc={this.state.videoURL}/>
                    </Grid>
                </Grid>
            </div>    
        )
    }

}

export default SyllableList;