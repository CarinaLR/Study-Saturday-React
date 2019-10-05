
import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = { 
            students: [],
            singleStudent: {}
         };
    }

    //we use async bc we need to await for the data. We get the data from the routes
    async componentDidMount() {
        try {
          //we use {} to be able to add more data
          const { data } = await axios.get('/student')
          this.setState({ students: data })
        }
        catch (err) {
          console.error(err)
        }
    }

    render () {
        return (
            <div>
                <h1>Students</h1>
                <ul>
                {this.state.students.map(student => { 
                    return <li key={student.id}>{student.fullName}</li> 
                    })}
                </ul>
            </div>
        )
    }
}