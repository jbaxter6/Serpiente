import UIfx from 'uifx'
import click from './button16.wav'

const hitSound = new UIfx(
  click,
  {
    volume: 0.6,
    throttleMs: 0
  }
)

export default hitSound;