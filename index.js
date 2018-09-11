const  express =  require('express') ;
const app = express();
let cont = 0;

app.use(express.static("public"));
app.get('/api/getM', function (req,res) {
    res.send("#" + Math.round(Math.random()));
    console.log(cont++);
});


const PORT = process.env.PORT ||8080;
app.listen(PORT,function () {
    console.log("escuchando ene el el http://localhost:"+PORT)
});