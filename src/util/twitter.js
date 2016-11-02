const setTweet = () => {
  let url = location.href
  document.getElementById( 'tw-area' ).innerHTML = ''
  let twbtn =
  `<a href="https://twitter.com/share" class="twitter-share-button" data-url="${url}" data-hashtags="sakepedia">Tweet</a>`
  document.getElementById( 'tw-area' ).innerHTML = twbtn

  if( window.twttr ){
    window.twttr.widgets.load( document.getElementById( 'tw-area' ) )
  }
}

export default setTweet
