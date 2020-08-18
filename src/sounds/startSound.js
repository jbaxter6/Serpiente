import UIfx from 'uifx'
import imHere1 from './imhere_01.mp3'
import imHere2 from './imhere_02.mp3'
import imHere3 from './imhere_03.mp3'
import imHere4 from './imhere_04.mp3'
import imHere5 from './imhere_05.mp3'
import iSeeYou1 from './iseeyou_01.mp3'
import iSeeYou2 from './iseeyou_02.mp3'
import iSeeYou3 from './iseeyou_03.mp3'

const sounds = [
  imHere1,
  imHere2,
  imHere3,
  imHere4,
  imHere5,
  iSeeYou1,
  iSeeYou2,
  iSeeYou3,
]

const sound = sounds[Math.floor(Math.random() * sounds.length)]

const startSound = new UIfx(
  sound,
  {
    volume: 0.6,
    throttleMs: 0
  }
)

export default startSound;