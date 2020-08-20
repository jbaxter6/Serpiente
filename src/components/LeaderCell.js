import React, { Component } from 'react'

export default class LeaderCell extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.record.score}</td>
                <td>{this.props.record.time}</td>
            </tr>
        )
    }
}
