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
            // entries.items.sort();
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
            // this.props.client.getAssets({
            //     'fields.title[match]': name + "_" + type
            // })
            // .then((assets) => {
            //     this.setState(() => (
            //         {
            //             searchLetter: {
            //                 name: name,
            //                 type: type
            //             },
            //             VideoURL: assets.items[0].fields.file.url
            //         }
            //         ), () => {
            //             console.log(this.state.searchLetter.name);
            //             console.log(this.state.searchLetter.type);
            //             console.log(this.state.VideoURL)
            //         } 
            //     )
            //     console.log(assets.items)
            //})
            //.catch(console.error)
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