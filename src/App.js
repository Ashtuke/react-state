import React, { Component } from 'react'
import './App.css';
import { Button } from 'react-bootstrap'
import Child from './Chilecomp/child.js'


export default class App extends Component {
  state = {
      Person : {
          fullName: "Bouzouita Assil",
          Profession: "Student",
          imageprof:"/Image.jpg" ,
          Quote:[" It's Not About How Hard You Get Hit,It's About How Hard You Can Get Hit And Keep Moving Forward"],
          Bio: {
              diploma: ["bachelor's degree in Technial sciences"],
              skills: [
                "HTML5/"
              , "CSS3/"
              , "JSX/"
              , "ES6"
              , "/ReactJS"
              , "/Github"],
              langue: { Arabic: "Excellent", English: "Very Good", French: "Good" }
          }
      },

      show: false,
    }
    handleShow = () => {
      this.setState({
        show: !this.state.show,
      })
    }
    render() {
      return (
        <div>
          <Button  variant="danger" onClick={this.handleShow} style={{ marginBottom: "10%" ,color:"red",size:"50"}}>{this.state.show ? "Hide" : "Show"}</Button>
          {this.state.show &&
            <Child Person={this.state.Person} />
          }
        </div>

    )
  }
}

