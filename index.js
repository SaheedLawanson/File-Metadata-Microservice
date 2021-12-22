let express = require('express')
let app = express()

const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

// Render HTML and CSS
app.use('/', express.static('.'))
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.js")
})


// Post request with multer middleware for parsing file uploads
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    // Create empty object "info" variable
    let info = {}
    // Information about uploaded file stored in variable
    let file = req.file

    // Save the name, type and size of the file to keys in the empty object
    info['name'] = file.originalname
    info['type'] = file.mimetype
    info['size'] = file.size

    // Return the object
    res.json(info)
})

// Listening for requests
const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})