//------------------------------------------------------------
// Purpose: returns the degrees that an elbow should be
//   it takes in two vectors: the vec going into elbow and vec coming out
//------------------------------------------------------------

//stringify([0,1],[1,0]) => '0110'
const stringify = (vec1,vec2) =>
{
  const [a,b] = vec1
  const [c,d] = vec2
  return `` + a + b + c + d
}
//main export
const elbowDeg = (inVec,outVec) =>
{
  //this switch checks the coordinates according to elbowDegrees.png
  switch(stringify(inVec,outVec)) {
    case '1001':
    case '0-1-10':
      return 0;
    case '01-10':
    case '100-1':
      return 90;
    case '0110':
    case '-100-1':
      return 180;
    case '0-110':
    case '-1001':
      return 270;
    default:
      return 0;
  }
}

export default elbowDeg;