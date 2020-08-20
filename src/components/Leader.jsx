import React, { Component } from 'react'
import LeaderCell from './LeaderCell'

const Leader = (props) =>
{  

  return (
    <div className='backdrop'>
    {() => this.test()}
      <table class="ui inverted selectable celled table">
        <thead>
          <tr>
            <th>Score</th>
            <th>Username</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {genRecordRows(props)}          
        </tbody>
      </table>
    </div>
  )  
}

const genRecordRows = ({records}) => {
  console.log("in genrows")
  const rows = records.map(record => <LeaderCell record={record} />)
  console.log(rows)
  return rows
}

export default Leader;