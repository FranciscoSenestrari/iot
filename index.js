const  express =  require('express') ;
const app = express();

app.use(express.static("public"));
app.get('/api/getUser', function (req,res) {
    res.send('hola');
});


const PORT = process.env.PORT ||8080;
app.listen(PORT,function () {
    console.log("escuchando ene el el http://localhost:"+PORT)
});