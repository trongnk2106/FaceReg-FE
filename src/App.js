import './App.css';


import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'


const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user"
};

console.log('trong')

function App() {

  const [url, setUrl] = useState(null)
  // const  setSaveVideo = React.useRef('0')
  // let vid = null
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    // vid = webcamRef
    console.log('hhhh',webcamRef)
    // setSaveVideo(webcamRef)
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc)
      },
      [webcamRef]
    );
    return (
      <>
        <div style = {{flexDirection : 'row', display : 'flex', justifyContent : 'space-between'}}>
          <div>
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={720}
              videoConstraints={videoConstraints}
            />
          </div>
         
            <div style = {{marginRight : 300, marginTop : 200, marginLeft : 200}}> 
                <button style = {{backgroundColor : 'green', borderRadius : 5, width : 200, height: 50}}
                  onClick={capture}
                > 
                  <text style = {{color : 'white', textAlign: 'center'}}> Add New User</text>
                </button>
  
                <button style = {{backgroundColor : 'green', borderRadius : 5, width : 200, height: 50, marginTop : 50}}
                  onClick={() => setUrl(null)}
                > 
                  <text style = {{color : 'white', textAlign: 'center'}}> Refresh</text>
                </button>
            </div>
          {/* // <button onClick={capture}>Capture photo</button> */}
        </div>
          
      </>
    );
  };
  
  


  return (
    <div>
      <div>
        <h1 style={{textAlign:'center'}}> Face Regconition </h1>
      </div>

      <div style = {{flexDirection :'row', display : 'flex', marginTop :100, justifyContent : 'space-between'
    }}>
        <div style = {{height : 800, width : 800, backgroundColor : 'white', marginLeft : 300}}>
          <h2 style = {{textAlign : 'center'}}> 
            Streaming Webcam
          </h2>
          <WebcamCapture/>
        </div>

       

      </div>

      <div>
        {url && (
          <div>
            <img src = {url} alt = 'Screenshot' />
          </div>

        )}
      </div>


    </div>
    
  );
}

export default App;
