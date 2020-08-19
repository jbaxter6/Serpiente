//-=--------------------------------
// Purpose: add two 2d vector (2d number array)
//----------------------------------

const addVector = (vec1,vec2) =>
{
  const [x1,y1] = vec1
  const [x2,y2] = vec2

  return [x1+x2,y1+y2]
}
export default addVector