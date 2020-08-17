const vectorDegrees = (vec) =>
{
  const [x,y] = vec

  if(x === 0 )
  {
    if(y === 1)
      return 180
    if(y === -1)
      return 0
  }else
  {
    if(x === 1)
      return 90
    if(x === -1)
      return 270
  }
}

export default vectorDegrees;