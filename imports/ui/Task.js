import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Task extends Component {

    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}