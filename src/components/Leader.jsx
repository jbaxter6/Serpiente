import React, { Component } from 'react'
import LeaderCell from './LeaderCell'

const Leader = (props) =>
{  

  return (
    <div className='backdrop'>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Score</th>
            <th>Name</th>
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