import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.section-title', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 90%',
    },
  })

  gsap.utils.toArray('.fade-in-up').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    })
  })

  gsap.utils.toArray('.accent-slide').forEach((element) => {
    gsap.from(element, {
      x: -40,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
    })
  })
}
