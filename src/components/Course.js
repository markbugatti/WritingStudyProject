import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    media: {
        width: '100%'
    }

});

const Course = (props) => {
    const classes = useStyles();
    return(
        <div>
            { props.course ? (
                <Card>
                    <video class={classes.media} src={props.course.fields.movie.fields.file.url} controls loop>
                    </video>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                            {props.course.fields.title}
                        </Typography>
                    </CardContent>                    
                </Card>
            ) : null }
        </div>
    )
}

export default Course