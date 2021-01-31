const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json()); //esto por ejemplo es un midelware que son funciones que se van a ejecutar cada ves que pase por ahí el codigo

//habilitar la carpeta public para que pueda ser accedida desde el browser
//app.use(express.static( __dirname, './dist/my-dream-app'));//necesitamos el path que resuelva la ruta
app.use(express.static(__dirname + '/build'));
//congif global de rutas
//app.use( require('./routes/index'));

/*mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
},(err, res)=>{

    if ( err ) throw err;

    console.log('Base de datos ONLINE');

});*/

const PORT = process.env.PORT || 3200;

app.set('port', PORT);

app.listen(PORT, () => {
  console.log('escuchando  test en el puerto ', PORT);
});
