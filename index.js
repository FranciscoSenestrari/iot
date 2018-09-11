const  express =  require('express') ;
const app = express();

app.get('/', function (req,res) {
    res.send('hola');
});
app.listen(8080,function () {
    console.log("escuchando ene el el http://localhost:8080")
});