// http://dongzhang.github.io/blog/Smooth-Scroll-Without-jQuery/
const smoothScroll = ( target, time ) => {
  const start = new Date().getTime()
  const startPosition = document.body['scrollTop']

  // set an interval to update scrollTop attribute every 25 ms
  let timer = setInterval( () => {
    // calculate the step, i.e the degree of completion of the smooth scroll
    let step = Math.min(1, (new Date().getTime() - start) / time)

    // calculate the scroll distance and update the scrollTop
    document.body['scrollTop'] -= step * ( startPosition - target.offsetTop )

    // end interval if the scroll is completed
    if (step == 1) {
      clearInterval(timer)
    }
  }, 25)
}
export default smoothScroll
