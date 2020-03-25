import React, {Component} from 'react';
import Syllable from './Syllable'
import VideoBlock from './VideoBlock'
import Grid from '@material-ui/core/Grid'

class SyllableList extends Component {
    state = {
        syllables: [],
        consonants: ['б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'х', 'ц', 'ч', 'ш'],
        videoURL: ''
    }

    constructor (props) {
        super(props);
        this.getSyllables();
        this.getVideo = this.getVideo.bind(this);
    }

    isLetter = (letter, syllable) => {
        letter.fields.name.includes(syllable)
    }

    getSyllables = () => {
        this.props.client.getEntries({
            content_type: 'syllable',
        }
        )
        .then((entries) => {
            // розподілити усі склади, по першим літерам
            this.setState({syllables: entries.items})
            // this.state.consonants.forEach(syllable => {
            //     var pushed = entries.items.filter(item => item.fields.name.includes(syllable) )
            //  });
             console.log(this.state.syllables);
        })  
        
    } 

    getVideo (name) {
        this.setState(() => (
            {
                videoURL: '../assets/' + name + '.mp4'
            }
            ), () => {
                console.log(this.state.videoURL)
            } 
        )
    }

    render() {
        return (                
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <Grid container spacing={1} > 
                        {this.state.consonants.map(letter => (
                            <Grid key={letter} item>
                                <Syllable letter={letter} syllables={this.state.syllables.filter(item => item.fields.name.includes(letter))}
                                    onSelectItem={this.getVideo}/>
                            </Grid>
                        ))}
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