const handleImage = ( file, max = 200, func ) =>{
  let reader = new FileReader()
  reader.onload = ( readerEvent ) => {
    let image = new Image()
    image.onload = () => {
      // Resize the image
      let canvas = document.createElement( 'canvas' )
      let width = image.width
      let height = image.height
      if ( width > height ) {
        if ( width > max ) {
          height *= max / width
          width = max
        }
      } else {
        if ( height > max ) {
          width *= max / height
          height = max
        }
      }
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext( '2d' )
      ctx.save()
      if( height < width ){
        canvas.height = width
        canvas.width = height
        ctx.rotate( 90 * Math.PI / 180 )
        ctx.translate( 0, -height )
      }
      ctx.drawImage( image, 0, 0, width, height )
      ctx.restore()
      func( canvas.toDataURL( 'image/png' ) )
    }
    image.src = readerEvent.target.result
  }
  if (file) {
    reader.readAsDataURL(file)
  }
}
export default handleImage
