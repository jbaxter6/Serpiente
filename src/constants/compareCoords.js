//---------------------------------------------
//Purpose: return true if the coordinate pairs are equal,
//Also works for vectors
//---------------------------------------------
const compareCoords = (arr1,arr2) => 
{
  return arr1[0] === arr2[0] && arr1[1] === arr2[1]
}
export default compareCoords;