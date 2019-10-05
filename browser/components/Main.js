import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
            <tr><StudentList students={this.state.students} /></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
//to create props we passed the this.state.stundent with a key.