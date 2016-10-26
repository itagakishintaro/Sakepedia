const setFaceook = () => {
  let url = location.href
  let fbhref = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`
  document.getElementById( 'fb-area' ).innerHTML = ''
  let fbbtn =
  `<div class="fb-share-button" data-href="${url}" data-layout="button" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="${fbhref}">シェア</a></div>`
  document.getElementById( 'fb-area' ).innerHTML = fbbtn

  if( window.FB ){
    window.FB.XFBML.parse( document.getElementById( 'fb-area' ) )
  }
}
export default setFaceook
