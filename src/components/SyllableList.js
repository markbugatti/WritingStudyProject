import React, {Component} from 'react';
import Syllable from './Syllable'

class SyllableList extends Component {
    state = {
        syllables: [],
        consonants: ['б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'х', 'ц', 'ч', 'ш']
    }

    constructor (props) {
        super(props);
        this.getSyllables();
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

    render() {
        return (
            this.state.consonants.map(letter => 
                <Syllable letter={letter} syllables={this.state.syllables.filter(item => item.fields.name.includes(letter))}/>
            )
            )
    }

}

export default SyllableList;