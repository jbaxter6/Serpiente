//----------------------------
// purpose: return difference beween v1 and v2 (2d arrays)
// accepts: 2 points
// returns: vector difference
//----------------------------
const vecDiff2d = (v1,v2) =>
{
  const [x1,y1] = v1
  const [x2,y2] = v2
  return [x1-x2,y1-y2]
}

export default vecDiff2d;