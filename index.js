const express = require("express");
const path = require("path");
const routes = require('./routes/index');
const app = express();

// static files
app.use(express.static('public'));


// pug
app.set('view engine','pug'); 

//views
app.set('views',path.join(__dirname,'./views'));

//routes
app.use('/',routes());

const port = process.env.PORT || 3000;
// const host = process.env.HOST || '0.0.0.0';


app.listen(port,() => {
    console.log(`Server on port ${port}`);
});