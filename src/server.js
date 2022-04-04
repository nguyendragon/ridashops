import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './route/web';
import connection from './configs/connectDB';
require('dotenv').config()
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
    console.log("Connected success port: " + port);
});