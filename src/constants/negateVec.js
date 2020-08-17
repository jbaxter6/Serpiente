//---------------------------------------------------------
// Purpose: negates an array
//---------------------------------------------------------
const negate = (array) =>
{
  return array.map(elm => !elm)
}

export {negate}