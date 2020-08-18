import UIfx from 'uifx'
import death1 from './death_01.mp3'
import death2 from './death_02.mp3'
import death3 from './death_03.mp3'

const sounds = [death1,death2,death3]
const sound = sounds[Math.floor(Math.random() * sounds.length)]
const deathSound = new UIfx(
  sound,
  {
    volume: 0.6,
    throttleMs: 0
  }
)

export default deathSound;