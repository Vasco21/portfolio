const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//maddileware

app.use(express.static('portfolio'))

app.get('/', (req , res) =>{
    res.sendFile((__dirname + 'index.html'));
})

app.listen(PORT, () =>{
    console.log(`server runing on port ${PORT}`);
})