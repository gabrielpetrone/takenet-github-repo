const app = require('../src/app');

// Configuração da porta do Heroku / 3000
const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
   if (port >= 0) {
         return port;
      }
   return false;
}

// Subir a API
app.listen(port, function () {
    console.log(`API /takenet GitHub Repo Online on port ${port}`)

});