import vectorDegrees from '../constants/vectorDegrees';
import vecDiff2d from './vecDiff2d'
import elbowDeg from './elbowDeg'
import compareCoords from '../constants/compareCoords'
//---------------------------------------------------------------------------
// Purpose: -map moves into a nested structure so that a move can be found by its row
//          -explains segment type (head,tail,straight segment, elbow segment)
//          -calculates the degrees that an elbow should be turned
//          -stores the number of moves --- they are not stored linearly, so size isnt easily computed outside
//ex: movesAtRow(moves).rows[20][1] is a 'move' coordinate pair where the snake is on row 20 at this coordinate
//---------------------------------------------------------------------------
const movesAtRow = (moves,currentVector) =>
{  
  const rows = []
  const movesMap = {}
  for(let i = 0; i < moves.length; i++)
  {
    const [x,y] = moves[i]
    !rows[y] && (rows[y] = [])
    !rows[y][i] && (rows[y][i] = {})

    rows[y][i].moves = moves[i]
    if(i === 0)
    {
      rows[y][i].snakePart = "head";
      rows[y][i].angle = vectorDegrees(currentVector)
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
          rows[y][i].snakePart = "straight segment"
          rows[y][i].angle = vectorDegrees(outVec)
          debugger;
        }
        else
        {
          console.log(`in: ${inVec} out: ${outVec}`)
          rows[y][i].snakePart = "elbow segment"
          //get appropriate degrees( used to turn elbow)
          rows[y][i].angle = elbowDeg(inVec,outVec)
        }
      }
      else//is tail
      {
        rows[y][i].snakePart = "tail"
        rows[y][i].angle = vectorDegrees(vecDiff2d(moves[i],moves[i-1]))
      }

    }
  }
  return {rows, size: moves.length}
}

export default movesAtRow;