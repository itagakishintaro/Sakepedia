const setTweet = () => {
  // remove any previous clone
  document.getElementById( 'tweet-area' ).innerHTML = ''

  // create a clone of the twitter share button template
  var clone = document.getElementsByClassName( 'twitter-share-button-template' )[0].cloneNode( true )

  // fix up our clone
  clone.removeAttribute( 'style' ) // unhide the clone
  clone.setAttribute( 'data-url', location.href )
  clone.setAttribute( 'class', 'twitter-share-button' )

  // copy cloned button into div that we can clear later
  document.getElementById( 'tweet-area' ).appendChild( clone )

  // reload twitter scripts to force them to run, converting a to iframe
  getScript('http://platform.twitter.com/widgets.js')
}

const getScript = (url, callback) => {
  var script = document.createElement( 'script' )
  script.type = 'text/javascript'
  script.src = url
  // most browsers
  script.onload = callback
  document.getElementsByTagName( 'head' )[0].appendChild(script)
}

export default setTweet
