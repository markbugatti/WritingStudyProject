import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = '7kwcorev18qn'
const ACCESS_TOKET = 'iIqFNbMVqZWVkoVvJ_c6htofPLk3pqXyReWLLnZ7TQ0'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKET
})

class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getCources();
    }

    getCources = () => {
        client.getEntries(
            {
                content_type: 'course',
                query: this.state.searchString
            }
        )
        .then((entries)=> {
            this.setState({courses: entries.items})
        })
        .catch((error)=> {
            console.log("Error occured while fetching data")
            console.log(error)
        })
    }

    onSearchInputChange = (event) => {
        if(event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCources();
    }
    
    render() {
        return (
            <div>
                {/* No cources found occured, debug this area */}
                {this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Letter"
                        margin="normal"
                        onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={2} style={{padding: 24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={4} lg={4} xl={3}>
                                    <Course course={currentCourse}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No cources found"}
            </div>
        )
    }
}

export default CourseList;