import React from 'react'
// material-ui
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import { grey400 } from 'material-ui/styles/colors'

class Camera extends React.Component{
  // Plain JavaScript
  start( elm ) {
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
  capture( canvas, video ) {
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

  componentDidMount() {
    this.start( document.getElementById( 'video' ) )
  }
  startCamera() {
    document.getElementById('snap').src = this.capture( document.getElementById('canvas'), document.getElementById('video') )
  }
  render() {
    const styles = {
      picture: {
        fontSize: 'small',
        color: grey400,
      },
      snap: {
        backgroundColor: grey400,
      },
    }
    return (
    <div>
      <div style={ styles.picture }>写真</div>
      <div>
        <canvas id="canvas" width="120" height="160" hidden />
        <video width="120" height="160" id="video" />
        <img id="snap" style={ styles.snap }/>
      </div>
      <RaisedButton label="" onClick={ this.startCamera.bind(this) } icon={ <FontIcon className="material-icons">photo_camera</FontIcon> } />
    </div>
    )
  }
}

export default Camera
