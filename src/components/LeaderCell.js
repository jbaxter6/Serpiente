import React, { Component } from 'react'
import Leader from '../containers/Leader'

//-------------------------------------------------------=
//Purpose: technically leader ROW
//         --each of these is a row in leaderboards page table
//-------------------------------------------------------=


const LeaderCell = (props) =>
{
  const {score,user,date} = props.record
  return (
  <tr>
    <td data-label="Score">{score}</td>
    <td data-label="User">{user}</td>
    <td data-label="Date">{date}</td>
  </tr>  
  )

}    

export default LeaderCell;