const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'files/'})
const fs = require('fs');
const officeToPdf = require("office-to-pdf");

const app = express();
const port = 3000;
// Middleware to parse JSON request bodies

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.post("/", upload.single('doc'), (req, res) => {
    console.log(req.file.originalname)
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})


