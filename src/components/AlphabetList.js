import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Letter from './Letter'

// const alphabet = ['А', 'а', 'Б', 'б', 'В', 'В']

class AlphabetList extends Component {
    state = {
        alphabet: [  'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Ґ', 'ґ', 'Д', 'д',
        'Е', 'е', 'Є', 'є', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'І', 'і',
        'Ї', 'ї', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о',
        'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф',
        'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'Щ', 'Ь', 'ь',
        'Ю', 'ю', 'Я', 'я']
    }
    
    onLetterClick = (event) => {
        console.log("Helo World");
    }

    render() {
        return(
            <div onClick={this.onLetterClick}>
                <Grid container spacing={1} > 
                {this.state.alphabet.map(letter => (
                    <Grid item>
                        <Letter letter={letter}/>
                    </Grid>
                ))}
                </Grid>
            </div>
        )
    }
}

export default AlphabetList;