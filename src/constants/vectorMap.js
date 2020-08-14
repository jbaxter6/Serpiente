const vectorMap = (direction) =>
{
  if(direction === 'up')
    return [0,-1]
  if(direction === 'down')
    return [0,1]
  if(direction === 'left')
    return [-1,0]
  if(direction === 'right')
    return [1,0]
}

export default vectorMap