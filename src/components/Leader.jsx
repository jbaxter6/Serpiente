import React, { Component } from 'react'

export default class Leader extends React.Component {
    render() {
        return (
            <div class='backdrop'>
                <table class="ui celled table">
                    <thead>
                    <tr><th>Name</th>
                    <th>Age</th>
                    </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label="Name">James</td>
                            <td data-label="Age">24</td>
                            <td data-label="Job">Engineer</td>
                            </tr>
                        </tbody>
                        </table>
            </div>
        )
    }
}
