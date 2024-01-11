const express = require('express');
const dotenv = require('dotenv').config();
const hbs = require('hbs');

const app = express();

const port = process.env.PORT




hbs.registerPartials(__dirname + '/views/partials', function (err) {
    console.log('Partial Not Found : ' +err);
});


app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/',(req,res)=>{                // ESTE RENDER UNA HANDLERBARS  Y EL OBJECT SON LOS PARAM A LA VISTA.
    res.render('home',{
        'nombre':"Dilker Cartagena",
        'curso':"Node JS",
        'imagen':"https://res.cloudinary.com/dirau81x6/image/upload/v1703627040/como-disenar-el-escaparate-y-la-fachada-de-tu-tienda-de-moda-parfois-completa_ie8fw8.jpg"
    });
});


app.get('/generic',(req,res)=>{
    res.render('generic',{
        'nombre':"Dilker Esto es GENERIC",
        'curso':"Node JS",
    });
});


app.get('/elements',(req,res)=>{
    res.render('elements',{
        'nombre':"Dilker Cartagena",
        'curso':"Node JS",
    });
});

// app.get('/elements',(req,res)=>{
//     res.sendFile(__dirname+'/public/elements.html');
// });

app.listen(port,()=>{
    console.log("Listening on Port: ", port);
});


