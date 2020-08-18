import UIfx from 'uifx'
import grow1 from './grow_01.mp3'
import grow2 from './grow_02.mp3'
import grow3 from './grow_03.mp3'
import grow4 from './grow_04.mp3'

const sounds = [grow1,grow2,grow3,grow4]
const sound = sounds[Math.floor(Math.random()*4)]

const growSound = new UIfx(
  sound,
  {
    volume: 0.5,
    throttleMs: 0
  }
)

export default growSound;