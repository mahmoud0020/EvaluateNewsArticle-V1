

const dotenv =require('dotenv');
dotenv.config();
const express = require('express')
const app = express()

app.use(express.static('dist'))

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// var path = require('path')



const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const mockAPIResponse = require('./mockAPI.js')
const PORT = 8060


const cors = require('cors');
app.use(cors());

// app.use(bodyParser.json());


console.log(__dirname)










app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

const CloudURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
// let userInput = [] // const does not work
app.post('/api', async function(req, res) {
    console.log(`You entered: ${req.body.url}`);
    const URL_API = `${CloudURL}key=${apiKey}&&url=${req.body.url}&lang=en`
    console.log(URL_API);
    const response = await fetch(URL_API)
    console.log(response);
    const cloudResData = await response.json()
    console.log(cloudResData)
    res.send(cloudResData)
   
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


