import React, {Component} from 'react';


import Syllable from './Syllable'
import VideoBlock from './VideoBlock'
import Grid from '@material-ui/core/Grid'

class SyllableList extends Component {
    state = {
        syllables: [],
        videoURL: '',
        loading: false,
        syllName: '',
        selectedSyllable: undefined,
    }

    consonants = []

    constructor (props) {
        super(props);
        this.getVideo = this.getVideo.bind(this);
        this.getConsonants();
    }

    isLetter = (letter, syllable) => {
        letter.fields.name.includes(syllable)
    }

    isConsonant (letter) {
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
            this.getSyllables();
        }, reason => {
            console.log("cannot obtain information")
        }
        )   
    }

    getSyllables () {
        this.props.client.getEntries({
            content_type: 'syllable',
        }
        )
        .then((entries) => {
            this.setState({syllables: entries.items})
        })    
    } 

    getVideo (syllable) {
        if(syllable !== null) {
            this.setState({
                videoURL: process.env.PUBLIC_URL + '/assets/syllables/' + syllable.fields.transcription + '_small.mp4',
                syllName: syllable.fields.name,
                // присваивать только, если не приходит нулл
                selectedSyllable: syllable
            })
        } 
        //else {
            // оставить предыдущий слог
            // this.setState(state => {
            //     return {
            //         videoURL: state.videoURL,
            //         syllName: state.syllName
            //     }
            // })
            // обнулить слог
            // this.setState({
            //     videoURL: '',
            //     syllName: ''
            // })    
        //}
    }

    defineValue(syllables) {
        if(this.state.selectedSyllable !== undefined) {
            let name = this.state.selectedSyllable.fields.name
            var exists = false;
            
            for (let index = 0; index < syllables.length; index++) {
                if(syllables[index].fields.name === name) {
                    exists = true;
                    index = syllables.length;
                }
            }
            
            if(exists) {
                return name;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }

    render() {

        var obj = {}
        return (                
            <div>
                <Grid  container spacing={2} justify="center">
                    <Grid item>
                        <Grid container spacing={2}>  
                        {
                            this.consonants.map(letter => 
                            { 
                                obj['id'] = letter.sys.id
                                obj['letter'] = letter.fields.title
                                obj['syllables'] = this.state.syllables.filter(item => item.fields.name.includes(letter.fields.title))
                                obj['getVideo']= this.getVideo
                                obj['selectedSyllable'] = this.state.selectedSyllable;
                                return (
                                <Grid key={obj['id']} item>
                                    <Syllable letter={obj['letter']} syllables={obj['syllables']}
                                        onSelectItem={obj['getVideo']} currentSyllableName={obj['selectedSyllable']}/>
                                </Grid>)
                            })
                        }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <VideoBlock videoSrc={this.state.videoURL} text={this.state.syllName}/>
                    </Grid>
                </Grid>
            </div>    
        )
    }

}

export default SyllableList;