const start = ( elm ) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia

  if ( navigator.getUserMedia ) {
    navigator.getUserMedia(
      { video: true },
      ( stream ) => {
        elm.src = window.URL.createObjectURL(stream)
        elm.onloadedmetadata = () => {
          elm.play()
        }
      },
      ( err ) => {
        return err
      }
    )
  } else {
    return 'getUserMedia not supported'
  }
}

const capture = ( canvas, video ) => {
  let context = canvas.getContext( '2d' )
  if ( video.videoHeight <= video.videoWidth ) {
    // Landscape
    let cropWidth = video.videoHeight * canvas.width / canvas.height
    let diffWidth = video.videoWidth - cropWidth
    context.drawImage( video, diffWidth / 2, 0, video.videoWidth - diffWidth, video.videoHeight, 0, 0, canvas.width, canvas.height )
  } else {
    // Portrait
    context.drawImage( video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width , canvas.height )
  }
  return canvas.toDataURL( 'mage/png' )
}

export { start, capture }
