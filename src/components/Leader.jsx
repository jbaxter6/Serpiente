import React, { Component } from 'react'
import LeaderCell from './LeaderCell'

export default class Leader extends React.Component {
    
    genRecordRows = () => {
        this.props.records.map( record => <LeaderCell record={record} />)
    }

    render() {
        return (
            <div class='backdrop'>
                <table class="ui celled table">
                    <thead>
                    <tr><th>Score</th>
                    <th>Time</th>
                    </tr></thead>
                        <tbody>
                            { this.genRecordRows() }
                        </tbody>
                        </table>
            </div>
        )
    }
}
