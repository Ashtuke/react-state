import React, { Component } from 'react'
import  '../App.css'

export default class Child extends Component {

    state = {
        count: 0
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);
    }


    render() {
        return (
            <div>

                <h2>{this.state.count}</h2>
                <img src={this.props.Person.imageprof} width={320} alt="ProfilePhoto" />
                <h2> FullName :{this.props.Person.fullName} </h2>
                <h2> Profession: {this.props.Person.Profession} </h2>
                <h2> Diploma :{this.props.Person.Bio.diploma} </h2>
                <h2> Skills : {this.props.Person.Bio.skills} </h2>
                <h2> Arabic : {this.props.Person.Bio.langue.Arabic} </h2>
                <h2> French : {this.props.Person.Bio.langue.French} </h2>
                <h2> English : {this.props.Person.Bio.langue.English} </h2>
                <h1> "{this.props.Person.Quote}"</h1>

            </div>

        )
    }
}


