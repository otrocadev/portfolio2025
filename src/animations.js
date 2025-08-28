import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const split = new SplitText('.title', {
  type: 'words',
})

gsap.from(split.words, {
  duration: 2,
  y: 20,
})
