import vectorDegrees from '../constants/vectorDegrees';
import vecDiff2d from './vecDiff2d'
import elbowDeg from './elbowDeg'
import compareCoords from '../constants/compareCoords'
//---------------------------------------------------------------------------
// Purpose: -map moves into a nested structure so that a move can be found by its row
//          -explains segment type (head,tail,straight segment, elbow segment)
//          -calculates the degrees that an elbow should be turned
//          -stores the number of moves --- they are not stored linearly, so size isnt easily computed outside
//ex: movesAtRow(moves).rows[y][x] is a 'move' coordinate pair
//        is on row y and column x
//---------------------------------------------------------------------------
const movesAtRow = (moves,currentVector) =>
{  
  const rows = []
  const movesMap = {}
  for(let i = 0; i < moves.length; i++)
  {
    const [x,y] = moves[i]
    !rows[y] && (rows[y] = [])
    !rows[y][x] && (rows[y][x] = {})

    rows[y][x].move = moves[i]
    if(i === 0)
    {
      rows[y][x].snakePart = "head";
      rows[y][x].angle = vectorDegrees(currentVector)
    }

    else //is a segment or tail
    {
      if(moves[i+1])//is segment
      {
        //___side is a segment next to current towards head or tail
        const headSide = moves[i-1]
        const current = moves [i]
        const tailSide = moves[i+1]

        //what angle is the snake going into segment and out?
        const inVec = vecDiff2d(current,tailSide)
        const outVec = vecDiff2d(headSide,current)
        
        //if direction coming in is equal to direction coming out, then
        //it should be a straight segment
        if(compareCoords(inVec,outVec))
        {
          rows[y][x].snakePart = "straight_segment"
          rows[y][x].angle = vectorDegrees(outVec)
        }
        else//is an elbow
        {
          rows[y][x].snakePart = "elbow_segment"
          //get appropriate degrees( used to turn elbow)
          rows[y][x].angle = elbowDeg(inVec,outVec)
        }
      }
      else//is tail
      {
        rows[y][x].snakePart = "tail"
        rows[y][x].angle = vectorDegrees(vecDiff2d(moves[i-1],moves[i]))
      }

    }
  }  
  return rows
}

export default movesAtRow;