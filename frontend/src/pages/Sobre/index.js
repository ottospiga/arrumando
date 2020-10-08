import React , { useState, useRef, useReducer }from 'react';
// import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

import NavBar from '../../components/NavBar';
import { Container, Card, Row, Col  } from 'react-bootstrap';

// const machine = {
//   initial: "initial",
//   states: {
//     initial: { on: { next: "loadingModel" } },
//     loadingModel: { on: { next: "modelReady" } },
//     modelReady: { on: { next: "imageReady" } },
//     imageReady: { on: { next: "identifying" }, showImage: true },
//     identifying: { on: { next: "complete" } },
//     complete: { on: { next: "modelReady" }, showImage: true, showResults: true }
//   }
// };
const URL = "https://teachablemachine.withgoogle.com/models/hgXJJHqbi/";
export default function Sobre(){
 

  let model, webcam, labelContainer, maxPredictions;

  // Load the image model and setup the webcam
  async function init() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // load the model and metadata
      // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
      // or files from your local hard drive
      // Note: the pose library adds "tmImage" object to your window (window.tmImage)

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();
      // Convenience function to setup a webcam
      const flip = true; // whether to flip the webcam
      webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      window.requestAnimationFrame(loop);

      // append elements to the DOM
      document.getElementById("webcam-container").appendChild(webcam.canvas);
      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) { // and class labels
          labelContainer.appendChild(document.createElement("div"));
      }
  }

  async function loop() {
      webcam.update(); // update the webcam frame
      await predict();
      window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
      // predict can take in an image, video or canvas html element
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
              prediction[i].className + ": " + prediction[i].probability.toFixed(2);
          labelContainer.childNodes[i].innerHTML = classPrediction;
      }
  }
//   const [results, setResults] = useState([]);
//   const [imageURL, setImageURL] = useState(null);
//   const [model, setModel] = useState(null);
//   const imageRef = useRef();
//   const inputRef = useRef();

//   const reducer = (state, event) =>
//     machine.states[state].on[event] || machine.initial;

//   const [appState, dispatch] = useReducer(reducer, machine.initial);
//   const next = () => dispatch("next");

//   const loadModel = async () => {
//     next();
//     // const model = await mobilenet.load();
//     const model = await tf.loadLayersModel("https://teachablemachine.withgoogle.com/models/hgXJJHqbi/");
    
//     // loadModel('/assets/model.json');
// // http
//     // const model = await tf.loadLayersModel('http://model-server.domain/download/model.json');
// // local-node
//     // const model = await tf.loadLayersModel('file://path/to/my-model/model.json');
//     // const model = await tf.loadLayersModel('file://../../assets/my_model/');
//     setModel(model);
//     next();
//   };
  
//   const identify = async () => {
//     next();
//     const results = await model.classify(imageRef.current);
//     setResults(results);
//     next();
//   };

//   const reset = async () => {
//     setResults([]);
//     next();
//   };

//   const upload = () => inputRef.current.click();

//   const handleUpload = event => {
//     const { files } = event.target;
//     if (files.length > 0) {
//       const url = URL.createObjectURL(event.target.files[0]);
//       setImageURL(url);
//       next();
//     }
//   };

//   const actionButton = {
//     initial: { action: loadModel, text: "Load Model" },
//     loadingModel: { text: "Loading Model..." },
//     modelReady: { action: upload, text: "Upload Image" },
//     imageReady: { action: identify, text: "Identify Breed" },
//     identifying: { text: "Identifying..." },
//     complete: { action: reset, text: "Reset" }
//   };

//   const { showImage, showResults } = machine.states[appState];



  return (
    <Container fluid>
      <NavBar />

        <Row>

        <div>Teachable Machine Image Model</div>
        <button type="button" onClick={() => {init()}}>Start</button>
        <div id="webcam-container"></div>
        <div id="label-container"></div>

        {/* <div>
      {showImage && <img src={imageURL} alt="upload-preview" ref={imageRef} />}
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleUpload}
        ref={inputRef}
      />
      {showResults && (
        <ul>
          {results.map(({ className, probability }) => (
            <li key={className}>{`${className}: %${(probability * 100).toFixed(
              2
            )}`}</li>
          ))}
        </ul>
      )}
      <button onClick={actionButton[appState].action || (() => {})}>
        {actionButton[appState].text}
      </button>
    </div> */}

        </Row>
      <br/>
    </Container>
  )
};