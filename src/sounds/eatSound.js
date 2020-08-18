import UIfx from 'uifx'
import crunch from './flesh_bloody_break.wav'

const eatSound = new UIfx(
  crunch,
  {
    volume: 0.6,
    throttleMs: 0
  }
)

export default eatSound;