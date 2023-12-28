const express = require('express');
const routes = require('./routes/indexroutes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./config/db');
// const PORT = process.env.PORT || 2000;
 const PORT =process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/v1', routes);

app.listen(PORT,'10.10.10.124' ,()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})

//