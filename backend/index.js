const canvas = require('canvas');
require('@tensorflow/tfjs-node'); // Load before @teachablemachine/image
const tmImage = require('@teachablemachine/image')
const express = require('express');

const app = express();

app.use(require('body-parser').raw({ type: 'image/png', limit: '3MB' }));


addEndpoint("test", 'https://teachablemachine.withgoogle.com/models/hgXJJHqbi/'); //You can add as many endpoints as you like

const JSDOM = require('jsdom').JSDOM;
global.window = new JSDOM(`<body><script>document.body.appendChild(document.createElement("hr"));</script></body>`).window;
global.document = window.document;
global.fetch = require('node-fetch');

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

async function addEndpoint(name, URL){
    let model;
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    model = await tmImage.load(modelURL, metadataURL);
    app.post('/' + name, (req, res, next) => {
        getPrediction(model, _arrayBufferToBase64(req.body), (output) => {
            res.send(output);
        });
      
    });
}

async function getPrediction(model, data, fu) {
    const can = canvas.createCanvas(64, 64);
    const ctx = can.getContext('2d');

    const img = new canvas.Image();
    img.onload = async () => {
        ctx.drawImage(img, 0, 0, 64, 64);

        const prediction = await model.predict(can);
        console.log(prediction);
        fu(prediction);
    }
    img.onerror = err => { throw err; }
    img.src = "data:image/png;base64," + data;
}

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}



// const express = require("express");
// const app = express();

// const tf = require("@tensorflow/tfjs");
// const tfcore = require("@tensorflow/tfjs-node");
// const mobilenet = require("@tensorflow-models/mobilenet");
// const fs = require("fs");
// const formidable = require("formidable");
// const bodyParser = require("body-parser");
// const image = require("get-image-data");

// app.use(bodyParser.json());

// const server = require("http").Server(app);

// app.post("/image", (req, res) => {
//   let form = new formidable.IncomingForm({
//     maxFileSize: 10485760, //10MB
//   });

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(500).send("Something went wrong during upload.");
//     } else {
//       whatIsThis(files.upload.path)
//         .then((imageClassification) => {
//           res.status(200).send({
//             classification: imageClassification,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           res
//             .status(500)
//             .send("Something went wrong while fetching image from URL.");
//         });
//     }
//   });
// });

// app.post("/image-from-url", async (req, res) => {
//   whatIsThis(req.body.url)
//     .then((imageClassification) => {
//       res.status(200).send({
//         classification: imageClassification,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send("Something went wrong while fetching image from URL.");
//     });
// });

// function whatIsThis(url) {
//   return new Promise((resolve, reject) => {
//     image(url, async (err, image) => {
//       if (err) {
//         reject(err);
//       } else {
//         const channelCount = 3;
//         const pixelCount = image.width * image.height;
//         const vals = new Int32Array(pixelCount * channelCount);

//         let pixels = image.data;

//         for (let i = 0; i < pixelCount; i++) {
//           for (let k = 0; k < channelCount; k++) {
//             vals[i * channelCount + k] = pixels[i * 4 + k];
//           }
//         }

//         const outputShape = [image.height, image.width, channelCount];

//         const input = tf.tensor3d(vals, outputShape, "int32");

//         const model = await mobilenet.load();

//         let temp = await model.classify(input);

//         resolve(temp);
//       }
//     });
//   });
// }

// const port = process.env.PORT || 80;

// const path = require("path");

// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile("./client/build/index.html", { root: __dirname });
// });

// server.listen(port, (req, res) => {
//   console.log(`Server is up and running @ port ${port}`);
// });