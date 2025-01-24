//Este es el punto de arranque de mi aplicación
import app from './app.js'
import './database.js';
app.listen(app.get('port'),()=>console.log("Server listening on port " + app.get('port')))