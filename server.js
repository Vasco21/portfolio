const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//maddileware

app.use(express.static('public'))

app.get('/', (req , res) =>{
    res.sendFile((__dirname + '/public/index.html'));
})

app.listen(PORT, () =>{
    console.log(`server runing on port ${PORT}`);
})