import React, { Component } from 'react'
import LeaderCell from '../components/LeaderCell'
//-------------------------------------------------------=
//Purpose: leaderboards page from route http:.../leaderboard
//-------------------------------------------------------=


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
  const rows = records.map(record => <LeaderCell record={record} />)
  return rows
}

export default Leader;