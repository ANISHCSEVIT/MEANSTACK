const express = require('express');
var  path =require ('path');
const port = process.env.PORT ||3000 ;
const app = express();


app.use(express.static(path.join(__dirname,'client')));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/client/browser/index.html'));
});

//starting server on port 8081
app.listen(port, () =>{
   console.log('Server started!');
   console.log(port);
});
